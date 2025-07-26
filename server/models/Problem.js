import mongoose from 'mongoose';

const testCaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  },
  isSample: {
    type: Boolean,
    default: false
  },
  explanation: {
    type: String,
    default: ''
  }
}, { _id: true });

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Problem title is required'],
    trim: true,
    maxlength: [200, 'Title must be less than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Problem description is required'],
    trim: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: [true, 'Difficulty level is required']
  },
  tags: [{
    type: String,
    trim: true
  }],
  boilerplate: {
    type: Map,
    of: String,
    default: {
      'javascript': '// Write your solution here\nfunction solution() {\n    \n}',
      'python': '# Write your solution here\ndef solution():\n    pass',
      'java': '// Write your solution here\npublic class Solution {\n    public void solution() {\n        \n    }\n}',
      'cpp': '// Write your solution here\n#include <iostream>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}'
    }
  },
  testCases: [testCaseSchema],
  constraints: {
    type: String,
    default: ''
  },
  examples: [{
    input: String,
    output: String,
    explanation: String
  }],
  hints: [{
    type: String,
    trim: true
  }],
  companies: [{
    type: String,
    trim: true
  }],
  similarProblems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem'
  }],
  stats: {
    totalSubmissions: { type: Number, default: 0 },
    acceptedSubmissions: { type: Number, default: 0 },
    acceptanceRate: { type: Number, default: 0 }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index for efficient searching and filtering
problemSchema.index({ title: 'text', description: 'text', tags: 'text' });
problemSchema.index({ difficulty: 1 });
problemSchema.index({ tags: 1 });
problemSchema.index({ 'stats.acceptanceRate': -1 });

// Calculate acceptance rate before saving
problemSchema.pre('save', function(next) {
  if (this.stats.totalSubmissions > 0) {
    this.stats.acceptanceRate = Math.round(
      (this.stats.acceptedSubmissions / this.stats.totalSubmissions) * 100
    );
  }
  next();
});

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;
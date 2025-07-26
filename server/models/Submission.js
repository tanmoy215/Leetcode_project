import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true
  },
  code: {
    type: String,
    required: [true, 'Code is required'],
    maxlength: [50000, 'Code is too long']
  },
  language: {
    type: String,
    required: [true, 'Programming language is required'],
    enum: ['javascript', 'python', 'java', 'cpp', 'c', 'python3']
  },
  verdict: {
    type: String,
    enum: [
      'Accepted',
      'Wrong Answer',
      'Time Limit Exceeded',
      'Memory Limit Exceeded',
      'Runtime Error',
      'Compilation Error',
      'Internal Error',
      'Pending'
    ],
    default: 'Pending'
  },
  executionTime: {
    type: Number, // in milliseconds
    default: 0
  },
  memoryUsed: {
    type: Number, // in KB
    default: 0
  },
  testCasesPassed: {
    type: Number,
    default: 0
  },
  totalTestCases: {
    type: Number,
    default: 0
  },
  errorMessage: {
    type: String,
    default: ''
  },
  judge0Details: {
    token: String,
    status: String,
    stdout: String,
    stderr: String,
    compile_output: String
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for efficient querying
submissionSchema.index({ userId: 1, submittedAt: -1 });
submissionSchema.index({ problemId: 1 });
submissionSchema.index({ verdict: 1 });
submissionSchema.index({ submittedAt: -1 });

// Virtual for success rate
submissionSchema.virtual('successRate').get(function() {
  if (this.totalTestCases === 0) return 0;
  return Math.round((this.testCasesPassed / this.totalTestCases) * 100);
});

// Ensure virtual fields are serialized
submissionSchema.set('toJSON', { virtuals: true });

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;
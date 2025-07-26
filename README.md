# CodeArena - MERN Stack LeetCode Clone

A modern, full-stack coding platform built with the MERN stack, featuring a clean UI with both light and dark modes, real-time code execution, and comprehensive problem-solving capabilities.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with light/dark mode support
- **Authentication**: Secure JWT-based authentication system
- **Code Editor**: Monaco Editor with syntax highlighting and theme support  
- **Real-time Execution**: Judge0 API integration for code execution
- **Problem Management**: Comprehensive CRUD operations for coding problems
- **User Profiles**: Track progress, submissions, and solved problems
- **Admin Panel**: Full administrative control over problems and users
- **Contest System**: Competitive programming contests with leaderboards

## 🛠 Tech Stack

### Frontend
- **React.js** - Modern UI library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router Dom** - Client-side routing
- **Monaco Editor** - VS Code-powered code editor
- **React Toastify** - Elegant notifications
- **Axios** - HTTP client
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Judge0 API** - Code execution service
- **Express Validator** - Input validation

## 📁 Project Structure

```
leetcode-clone/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts (Auth, Theme)
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── config/             # Configuration files
│   └── package.json
└── package.json           # Root package.json for concurrently
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Judge0 API key (optional for code execution)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd leetcode-clone
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/leetcode-clone
   JWT_SECRET=your-super-secret-jwt-key-here
   JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
   JUDGE0_API_KEY=your-judge0-api-key-here
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

   This will start both the frontend (http://localhost:5173) and backend (http://localhost:5000) servers concurrently.

## 📋 Development Phases

### ✅ Phase 1: Project Setup & Foundation
- [x] Directory structure and initialization
- [x] Backend dependencies and environment setup
- [x] Database models (User, Problem, Submission)
- [x] Basic Express server with MongoDB connection
- [x] Frontend setup with React, TypeScript, and Tailwind CSS
- [x] Theme context and authentication context
- [x] Basic routing and layout components

### 🔄 Phase 2: Backend API Development (Next)
- [ ] Authentication routes (login, register)
- [ ] JWT middleware and admin middleware
- [ ] Problem CRUD operations
- [ ] Code execution and submission endpoints
- [ ] User submission history

### 📋 Phase 3: Frontend Development (Upcoming)
- [ ] Authentication pages (login, register)
- [ ] Problem list page with filtering
- [ ] Problem solving page with Monaco Editor
- [ ] User profile and submission history
- [ ] Toast notifications integration

### 📋 Phase 4: Admin Panel (Upcoming)
- [ ] Admin dashboard with analytics
- [ ] Problem management interface
- [ ] User management system
- [ ] Submission monitoring

### 📋 Phase 5: Contest Module (Future)
- [ ] Contest creation and management
- [ ] Real-time contest participation
- [ ] Leaderboard system
- [ ] Contest analytics

### 📋 Phase 6: Deployment (Future)
- [ ] Production build optimization
- [ ] Environment configuration
- [ ] Frontend deployment (Vercel/Netlify)
- [ ] Backend deployment (Render/Railway)

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend servers
- `npm run install-all` - Install dependencies for all packages
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend server

### Server Directory
- `npm run dev` - Start server with nodemon
- `npm start` - Start server in production mode

### Client Directory
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode**: System preference detection with manual toggle
- **Modern Aesthetics**: Clean, Apple-inspired design with attention to detail
- **Smooth Animations**: Subtle transitions and micro-interactions
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized loading with skeleton screens

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Input Validation**: Comprehensive validation using express-validator
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Admin Protection**: Role-based access control

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Responsive images with proper formats
- **Bundle Analysis**: Optimized bundle sizes
- **Caching Strategy**: Efficient API response caching
- **Database Indexing**: Optimized database queries

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Judge0 API for code execution capabilities
- Monaco Editor for the excellent code editing experience
- The MERN stack community for excellent documentation and tools

---

**Note**: This project is currently in Phase 1 of development. Additional features and pages will be implemented in subsequent phases as outlined in the project roadmap.
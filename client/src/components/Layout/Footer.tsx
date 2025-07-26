import React from 'react';
import { Code, Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
              <Code size={24} />
              <span className="text-lg font-bold">CodeArena</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Master your coding skills with our comprehensive platform for algorithms and data structures.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/problems" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Problems</a></li>
              <li><a href="/contests" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contests</a></li>
              <li><a href="/leaderboard" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Leaderboard</a></li>
              <li><a href="/tutorials" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Tutorials</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 CodeArena. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-2 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-error-500" /> by developers, for developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
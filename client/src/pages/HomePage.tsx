import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Code, Zap, Trophy, Users, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary-600" />,
      title: 'Coding Challenges',
      description: 'Solve problems ranging from easy to hard across multiple programming languages.'
    },
    {
      icon: <Zap className="w-8 h-8 text-warning-500" />,
      title: 'Real-time Execution',
      description: 'Test your code instantly with our powerful online judge system.'
    },
    {
      icon: <Trophy className="w-8 h-8 text-success-500" />,
      title: 'Competitions',
      description: 'Participate in coding contests and climb the leaderboard.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: 'Community',
      description: 'Learn from other developers and share your solutions.'
    }
  ];

  const stats = [
    { label: 'Problems', value: '500+' },
    { label: 'Users', value: '10K+' },
    { label: 'Solutions', value: '50K+' },
    { label: 'Languages', value: '8+' }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-20">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Master Your
            <span className="text-primary-600 dark:text-primary-400"> Coding Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Practice algorithms, data structures, and problem-solving with our comprehensive platform. 
            Prepare for technical interviews and become a better developer.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {isAuthenticated ? (
            <Link to="/problems" className="btn btn-primary btn-lg">
              Solve Problems
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/problems" className="btn btn-secondary btn-lg">
                Browse Problems
              </Link>
            </>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose CodeArena?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide everything you need to improve your coding skills and prepare for technical interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Level Up Your Programming Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our platform is designed to help you become a better programmer through consistent practice and learning.
            </p>
            
            <ul className="space-y-3">
              {[
                'Practice with real interview questions',
                'Get instant feedback on your solutions',
                'Track your progress over time',
                'Learn from detailed explanations',
                'Compete with other developers'
              ].map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            {!isAuthenticated && (
              <Link to="/register" className="btn btn-primary btn-lg inline-flex items-center">
                Start Coding Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}
          </div>

          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 font-mono text-sm text-white space-y-1">
  <div className="text-green-400">// Example: Two Sum Problem</div>
  <div>
    <span className="text-blue-400">function</span>{' '}
    <span className="text-yellow-400">twoSum</span>
    <span>(nums, target) {'{'}</span>
  </div>
  <div className="ml-4 text-gray-300">const map = new Map();</div>
  <div className="ml-4">
    <span className="text-purple-400">for</span>{' '}
    <span>(let i = 0; i &lt; nums.length; i++) {'{'}</span>
  </div>
  <div className="ml-8 text-gray-300">const complement = target - nums[i];</div>
  <div className="ml-8">
    <span className="text-purple-400">if</span>{' '}
    <span>(map.has(complement)) {'{'}</span>
  </div>
  <div className="ml-12">
    <span className="text-purple-400">return</span>{' '}
    <span>[map.get(complement), i];</span>
  </div>
  <div className="ml-8">{'}'}</div>
  <div className="ml-8 text-gray-300">map.set(nums[i], i);</div>
  <div className="ml-4">{'}'}</div>
  <div>{'}'}</div>
</div>

        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Join thousands of developers who are improving their skills with CodeArena. 
              Sign up now and start solving your first problem in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-white text-primary-600 hover:bg-gray-100 btn btn-lg font-semibold">
                Create Free Account
              </Link>
              <Link to="/problems" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 btn btn-lg font-semibold">
                View Problems
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
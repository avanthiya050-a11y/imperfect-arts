import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const { setUser } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name: isLogin ? 'User' : name, email, id: Date.now().toString() };
    setUser(user);
    alert(`${isLogin ? 'Logged in' : 'Account created'} successfully!`);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-ivory rounded-3xl card-shadow p-8"
        >
          <h1 className="font-serif font-bold text-3xl text-text mb-2 text-center">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-text-light text-center mb-8">
            {isLogin ? 'Login to your account' : 'Join Imperfect Arts community'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-text mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="input-field"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-text mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field"
                required
              />
            </div>

            {isLogin && (
              <Link to="/forgot-password" className="text-sm text-brown hover:text-sage transition-colors block">
                Forgot password?
              </Link>
            )}

            <button type="submit" className="btn-primary w-full mt-6">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-beige text-center">
            <p className="text-text-light text-sm">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setEmail('');
                setPassword('');
                setName('');
              }}
              className="text-brown font-medium hover:text-sage transition-colors mt-2"
            >
              {isLogin ? 'Create Account' : 'Login'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

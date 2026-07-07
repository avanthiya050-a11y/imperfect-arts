import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
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
            Reset Password
          </h1>
          <p className="text-text-light text-center mb-8">
            Enter your email to receive password reset instructions
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button type="submit" className="btn-primary w-full mt-6">
                Send Reset Link
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <div className="text-4xl mb-4">✓</div>
              <p className="text-text-light mb-6">
                Password reset instructions have been sent to your email.
              </p>
              <p className="text-sm text-text-light mb-6">
                Please check your email and follow the instructions to reset your password.
              </p>
              <Link to="/login" className="btn-primary w-full text-center block">
                Back to Login
              </Link>
            </motion.div>
          )}

          <div className="mt-6 pt-6 border-t border-beige text-center">
            <Link to="/login" className="text-brown font-medium hover:text-sage transition-colors">
              Return to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

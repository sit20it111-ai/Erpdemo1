import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login API call
    setTimeout(() => {
      if (email && password) {
        // Login success
        onLoginSuccess({ email, name: email.split('@')[0] });
      } else {
        setError('Please enter both email and password');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo & Header */}
        <div className="login-header">
          <div className="login-logo">M</div>
          <h1>MBBS ERP</h1>
          <p>Medical College Management System</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>Demo credentials: admin@college.com / password</p>
        </div>
      </div>
    </div>
  );
}

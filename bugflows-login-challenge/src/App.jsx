import React from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  const handleForgotPassword = () => {
    alert('Forgot password clicked');
  };

  return (
    <div className="app">
      <div className="background-pattern"></div>
      <div className="login-container">
        <div className="logo-section">
          <div className="logo">
            <div className="bf-logo">
              <span className="bf-text">BF</span>
            </div>
            <div className="brand-info">
              <span className="brand-name">Bugflows</span>
              <span className="brand-tagline">MLaaS Platform</span>
            </div>
          </div>
          <h2 className="login-title">AI-Powered Defect Resolution</h2>
          <p className="login-subtitle">Access your enterprise MLaaS platform</p>
        </div>

        <LoginForm />

        <div className="footer-links">
          <button
            className="forgot-password"
            onClick={handleForgotPassword}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              textDecoration: 'underline',
              color: 'blue',
              cursor: 'pointer',
              fontSize: 'inherit',
              fontFamily: 'inherit',
            }}
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

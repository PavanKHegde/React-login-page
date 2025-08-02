import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading state for MLaaS platform authentication
    setTimeout(() => {
      console.log('Bugflows MLaaS Login attempted with:', formData);
      alert(`Welcome to Bugflows MLaaS Platform! Logged in with: ${formData.email}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-form">
      <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <span className="input-highlight"></span>
      </div>
      
      <div className="input-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <span className="input-highlight"></span>
      </div>
      
      <button 
        type="submit" 
        className={`login-button ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
        onClick={handleSubmit}
      >
        {isLoading ? (
          <>
            <span className="spinner"></span>
            Authenticating...
          </>
        ) : (
          'Access Platform'
        )}
      </button>
    </div>
  );
};

export default LoginForm;
import React from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>🏳️‍🌈 Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;

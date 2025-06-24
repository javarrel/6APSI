import React from 'react';
import './LandingPage.css';

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to My Project</h1>
        <p>Your modern solution for Fitness </p>
        <button onClick={onGetStarted}>Get Started</button>
      </header>

      <section className="features">
        <div className="feature">
          <h3>🚴‍♂️ Commmit to be fit</h3>
          <p>Weight Management.</p>
        </div>
        <div className="feature">
          <h3>💪 Build a foundation</h3>
          <p>Strength & Conditioning.</p>
        </div>
        <div className="feature">
          <h3>🏋️ Confidence</h3>
          <p>Fast Metabolism.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 My Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

import React, { useState } from 'react';
import LandingPage from './LandingPage_TEMP';
import LoginPage from './LoginPage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? (
        <LoginPage />
      ) : (
        <LandingPage onGetStarted={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import LoginPage from '../pages/LoginPage.js';
import UserSignupPage from '../pages/UserSignupPage.js';
import UserPage from '../pages/UserPage.js';
import TopBar from '../components/TopBar.js';

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={UserSignupPage} />
          <Route path="/:username" Component={UserPage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
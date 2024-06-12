import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard'; 
import SignIn from './components/signin'; 

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tournaments from './pages/Tournaments';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import Leaderboards from './pages/Leaderboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/games" element={<Games />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

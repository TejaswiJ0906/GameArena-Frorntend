import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About GameArena</h1>
        <p>
          <strong>GameArena</strong> is the ultimate destination for competitive gamers across the globe.
          We bring the thrill of tournaments, the pride of leaderboards, and the joy of winning – all into one dynamic platform.
        </p>
        <p>
          Whether you're a rookie racer or a seasoned FPS sniper, GameArena offers events for every skill level.
          Join, compete, win exciting prizes, and rise through the ranks.
        </p>
        <h2>🚀 Our Mission</h2>
        <p>
          To empower gamers by creating a professional and inclusive space to showcase their skills,
          earn recognition, and be part of a thriving gaming community.
        </p>
        <h2>🎯 What We Offer</h2>
        <ul>
          <li>🎮 Multiple genre-based tournaments</li>
          <li>💰 Prize pools and exciting rewards</li>
          <li>📈 Real-time leaderboards</li>
          <li>🗓️ Scheduled and live events</li>
          <li>👥 Team creation and collaboration</li>
        </ul>
        <p>
          Game on, champion. Your legacy starts here.
        </p>
      </div>
    </div>
  );
};

export default About;

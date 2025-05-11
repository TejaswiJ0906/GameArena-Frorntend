import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const user = { name: 'PlayerOne' };
  const tournaments = [
    { name: 'Spring Smash', date: '2025-06-15' },
    { name: 'Arena Kings', date: '2025-07-01' },
  ];
  const leaderboard = [
    { name: 'ProGamerX', score: 980 },
    { name: 'ShadowStrike', score: 875 },
    { name: 'PlayerOne', score: 840 },
  ];

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.name}!</h1>

      <section className="dashboard-section">
        <h2>Upcoming Tournaments</h2>
        <ul>
          {tournaments.map((tournament, index) => (
            <li key={index}>
              <strong>{tournament.name}</strong> – {tournament.date}
            </li>
          ))}
        </ul>
      </section>

      <section className="dashboard-section">
        <h2>Your Stats</h2>
        <p>Wins: 32</p>
        <p>Losses: 8</p>
        <p>Rank: Diamond</p>
      </section>

      <section className="dashboard-section">
        <h2>Leaderboard</h2>
        <ol>
          {leaderboard.map((player, index) => (
            <li key={index}>
              {player.name} – {player.score} pts
            </li>
          ))}
        </ol>
      </section>

      <section className="dashboard-section">
        <h2>Game Categories</h2>
        <div className="categories">
          <span>FPS</span>
          <span>MOBA</span>
          <span>Fighting</span>
          <span>RPG</span>
          <span>Strategy</span>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

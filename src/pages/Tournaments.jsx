
import React from 'react';
import './Tournaments.css';

const tournaments = [
  {
    title: 'Car Racing Championship',
    date: 'April 25, 2025',
    prize: '$1000',
    type: 'Solo',
    entryFee: '$5',
  },
  {
    title: 'Battle Royale Showdown',
    date: 'April 30, 2025',
    prize: '$1500',
    type: 'Squad',
    entryFee: '$10',
  },
  {
    title: 'FIFA Masters League',
    date: 'May 5, 2025',
    prize: '$800',
    type: '1v1',
    entryFee: '$7',
  },
];

const Tournaments = () => {
  return (
    <div className="tournaments-page">
      <h2 className="tournaments-title">🎮 Upcoming Tournaments</h2>
      <div className="tournaments-list">
        {tournaments.map((tourney, index) => (
          <div className="tournament-card" key={index}>
            <h3>{tourney.title}</h3>
            <p><strong>Date:</strong> {tourney.date}</p>
            <p><strong>Type:</strong> {tourney.type}</p>
            <p><strong>Entry Fee:</strong> {tourney.entryFee}</p>
            <p><strong>Prize:</strong> <span className="prize">{tourney.prize}</span></p>
            <button className="register-btn">Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;

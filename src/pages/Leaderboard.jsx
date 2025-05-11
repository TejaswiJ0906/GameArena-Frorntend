import React from 'react';
import './Leaderboard.css';

const players = [
  { rank: 1, name: 'ShadowHunter', score: 980 },
  { rank: 2, name: 'SpeedDemon', score: 870 },
  { rank: 3, name: 'SniperX', score: 830 },
  { rank: 4, name: 'BlazeStorm', score: 810 },
  { rank: 5, name: 'NovaRider', score: 780 },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Top Players</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

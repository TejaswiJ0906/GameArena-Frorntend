import React from 'react';
import './Leaderboard.css';

const leaderboardData = [
  { rank: 1, player: 'ShadowSlayer', game: 'Car Racing', score: 9800 },
  { rank: 2, player: 'PixelWarrior', game: 'Battle Royale', score: 9500 },
  { rank: 3, player: 'NeonGhost', game: 'FPS Arena', score: 9100 },
  { rank: 4, player: 'FireStorm', game: 'Moto GP', score: 8900 },
  { rank: 5, player: 'XenoHunter', game: 'Zombie Rush', score: 8700 }
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Top Players Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Game</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry) => (
            <tr key={entry.rank}>
              <td>{entry.rank}</td>
              <td>{entry.player}</td>
              <td>{entry.game}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

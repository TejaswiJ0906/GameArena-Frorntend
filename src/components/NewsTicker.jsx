import React from 'react';
import './NewsTicker.css';

const newsItems = [
  "🔥 Registration open for Battle Royale Championship!",
  "🏁 Car Racing Tournament starts May 10th!",
  "🎮 New game 'Cyber Clash' added to GameArena!",
  "🏆 Leaderboard updated - ShadowSlayer still at the top!",
  "🚀 New rewards announced for weekly top scorers!"
];

const NewsTicker = () => {
  return (
    <div className="news-ticker">
      <div className="news-label">📰 News</div>
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {newsItems.map((item, index) => (
            <span key={index} className="ticker-item">• {item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;

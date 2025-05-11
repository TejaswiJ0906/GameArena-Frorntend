import React, { useState } from 'react';
import './TabsSection.css';

const upcomingTournaments = [
  { title: "Car Racing Championship", date: "May 10, 2025", prize: "₹5000" },
  { title: "FPS Arena - Knockouts", date: "May 15, 2025", prize: "₹3000" },
  { title: "Zombie Rush Qualifiers", date: "May 18, 2025", prize: "₹7000" }
];

const completedTournaments = [
  { title: "Battle Royale Finals", date: "April 5, 2025", winner: "PixelWarrior" },
  { title: "Moto GP Night Race", date: "April 1, 2025", winner: "SpeedMaster" },
  { title: "Cyber Clash Prelims", date: "March 25, 2025", winner: "NeonGhost" }
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="tabs-section">
      <h2 className="tabs-title">🎮 Tournaments</h2>
      <div className="tabs-buttons">
        <button
          className={activeTab === 'upcoming' ? 'active' : ''}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={activeTab === 'completed' ? 'active' : ''}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      <div className="tabs-content">
        {activeTab === 'upcoming' ? (
          <ul>
            {upcomingTournaments.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> - {item.date} | Prize: {item.prize}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {completedTournaments.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> - {item.date} | Winner: {item.winner}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TabsSection;

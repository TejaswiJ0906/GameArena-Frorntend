import React from 'react';
import './Games.css';
import GameCard from '../components/GameCard';

// Sample game data
const games = [
  {
    id: 1,
    title: 'Speed Racers',
    image: '/src/assets/game1.jpg',
    categories: ['Racing', 'Time Trial'],
    prize: '₹50,000',
  },
  {
    id: 2,
    title: 'Battle Legends',
    image: '/src/assets/game2.jpg',
    categories: ['Action', 'Multiplayer'],
    prize: '₹1,00,000',
  },
  {
    id: 3,
    title: 'Sniper Elite',
    image: '/src/assets/game3.jpg',
    categories: ['FPS', 'Solo'],
    prize: '₹75,000',
  },
  
];

const Games = () => {
  return (
    <div className="games-container">
      <h1 className="games-title">Available Tournaments</h1>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;

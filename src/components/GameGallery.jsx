import React from 'react';
import GameCard from './GameCard';
import './GameGallery.css';
const game1 = "https://via.placeholder.com/300x200?text=Game+1";
const game2 = "https://via.placeholder.com/300x200?text=Game+2";


const gameList = [
  {
    id: 1,
    image: game1,
    title: "Car Racing",
    category: "Under 18",
    prize: 5000,
    entryFee: 100,
    players: 8,
    date: "2025-05-10"
  },
  {
    id: 2,
    image: game2,
    title: "Battle Royale",
    category: "18+",
    prize: 10000,
    entryFee: 200,
    players: 16,
    date: "2025-05-12"
  }
  
];

const GameGallery = () => {
  return (
    <div className="gallery-container">
      {gameList.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameGallery;

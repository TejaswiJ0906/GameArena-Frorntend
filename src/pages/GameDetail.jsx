import React from 'react';
import { useParams } from 'react-router-dom';
import './GameDetail.css';

const mockGameData = {
  1: {
    title: "Speed Racers",
    image: "/src/assets/game1.jpg",
    categories: ["Car Racing", "Time Trial"],
    prize: "₹50,000",
    entryFee: "₹200",
    players: "Solo / Duo",
    date: "2025-04-20",
  },
  1: {
    title: "Speed Racers",
    image: "/src/assets/game1.jpg",
    categories: ["Car Racing", "Time Trial"],
    prize: "₹50,000",
    entryFee: "₹200",
    players: "Solo / Duo",
    date: "2025-04-20",
  },
  
};

const GameDetail = () => {
  const { id } = useParams();
  const game = mockGameData[id];

  if (!game) {
    return <div className="game-detail-container">Game not found.</div>;
  }

  return (
    <div className="game-detail-container">
      <div className="game-detail-card">
        <img src={game.image} alt={game.title} className="game-detail-image" />
        <div className="game-detail-info">
          <h1>{game.title}</h1>
          <p><strong>Categories:</strong> {game.categories.join(', ')}</p>
          <p><strong>Prize:</strong> {game.prize}</p>
          <p><strong>Entry Fee:</strong> {game.entryFee}</p>
          <p><strong>Players:</strong> {game.players}</p>
          <p><strong>Match Date:</strong> {game.date}</p>
          <button className="register-button">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;

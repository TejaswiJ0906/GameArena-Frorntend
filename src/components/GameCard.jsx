import React from 'react';
import './GameCard.css';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} className="game-image" />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p className="category">Category: {game.category}</p>
        <p className="prize">Prize: ₹{game.prize}</p>
        <p className="entry">Entry Fee: ₹{game.entryFee}</p>
        <p className="players">Players: {game.players}</p>
        <p className="date">Match Date: {game.date}</p>
        <Link to={`/games/${game.id}`} className="details-btn">View Details</Link>
      </div>
    </div>
  );
};

export default GameCard;

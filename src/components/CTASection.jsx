import React from 'react';
import './CTASection.css';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Are You Ready to Join the Ultimate Battle?</h2>
        <p>Compete with the best players. Win exciting prizes. Level up your game.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-btn join">Join Now</Link>
          <Link to="/tournaments" className="cta-btn tournaments">View Tournaments</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import React from 'react';
import './Home.css';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import TabsSection from '../components/TabsSection';
import NewsTicker from '../components/NewsTicker';
import GameGallery from '../components/GameGallery';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <NewsTicker />
      <CTASection />
      <TabsSection />
      <GameGallery />
    </div>
  );
};

export default Home;

import React from 'react';
import './Hero.css'; // This is where the CSS you write will be imported

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover Endless Stories</h1>
        <p>Immerse yourself in the world of books with our curated collection of literary masterpieces. Explore, learn, and be inspired.</p>
        <a href='#main-content'>
        <button className="create-ebook-button">Create from URL</button>
        </a>
        <button className="shop-button">Shop<i>(Coming soon)</i></button>
      </div>
    </div>
  );
};

export default Hero;

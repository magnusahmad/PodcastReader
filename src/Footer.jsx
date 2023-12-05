import React from 'react';
import './Footer.css'; // Make sure to create and import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-brand">Podcast Reader</span>
        <span className="footer-made-with">Twitter: <a href="twitter.com/finallyreturn">finallyreturn</a></span>
      </div>
    </footer>
  );
};

export default Footer;

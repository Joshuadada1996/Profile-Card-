import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-border"></div>
      <div className="social-icons">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="icon twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="icon facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/Joshuadada1996"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="icon github"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

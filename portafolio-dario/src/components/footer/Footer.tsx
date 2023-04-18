import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} My Website</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="me-3" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="me-3" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="me-3" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
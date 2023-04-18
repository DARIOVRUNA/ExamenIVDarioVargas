import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <span className="text-muted">©️ 2023 Mi Sitio Web</span>
          </div>
          <div className="col-sm-6">
            <nav className="nav justify-content-end">
              <div className="col-sm-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="1x" className="col-me-3" />
            </a>
              </div >
              <div className="col-sm-6">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="1x" className="col-me-3" />
            </a>
              </div>
            <div className="col-sm-6">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="1x" className="col-me-3" />
            </a>
            </div>
              <div className="col-sm-6">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
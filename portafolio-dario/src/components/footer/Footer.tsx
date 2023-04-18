import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <h5>Nosotros</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Historia
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Equipo
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h5>Servicios</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Diseño Web
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Desarrollo de Apps
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Contacto</h5>
            <ul className="list-unstyled text-small">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="3x"
                  className="col-me-3"
                />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="3x"
                  className="col-me-3"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  className="col-me-3"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="4x" />
              </a>
            </ul>
          </div>
        </div>
        <div className="border-top pt-3">
          <p className="text-muted">&copy; 2023 Mi Sitio Web</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

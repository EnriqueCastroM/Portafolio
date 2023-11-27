import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contacto() {
  return (
    <section id='contact'>
      <div className="flex justify-center items-center my-4">
        <div className="flex space-x-4">
          <a href="https://github.com/EnriqueCastroM" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/enriqueivancastro/" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:kcmtha@gmail.com" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://www.instagram.com/castorkiks" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <h2>Mairie de Ville</h2>
        </Link>
        
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu de navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/articles" className="navbar-link" onClick={closeMenu}>
              Actualités
            </Link>
          </li>
          <li>
            <Link to="/services" className="navbar-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/infos" className="navbar-link" onClick={closeMenu}>
              Infos pratiques
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

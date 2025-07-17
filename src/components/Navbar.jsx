import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h2>Mairie de Ville</h2>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/articles" className="navbar-link">
              Actualités
            </Link>
          </li>
          <li>
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/infos" className="navbar-link">
              Infos pratiques
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

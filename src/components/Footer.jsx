import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mairie de Ville</h3>
            <p>
              Place de la République<br/>
              12345 Ville<br/>
              France
            </p>
            <div className="footer-contact">
              <p>📞 01 23 45 67 89</p>
              <p>📧 contact@ville.fr</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="/services">État civil</a></li>
              <li><a href="/services">Urbanisme</a></li>
              <li><a href="/services">Élections</a></li>
              <li><a href="/services">Démarches scolaires</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Informations</h3>
            <ul>
              <li><a href="/infos">Horaires</a></li>
              <li><a href="/infos">Transports</a></li>
              <li><a href="/infos">Services d'urgence</a></li>
              <li><a href="/contact">Nous contacter</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Suivez-nous</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
            <div className="newsletter">
              <h4>Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Votre email" />
                <button type="submit">S'abonner</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Mairie de Ville. Tous droits réservés.</p>
            <div className="footer-links">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Accessibilité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

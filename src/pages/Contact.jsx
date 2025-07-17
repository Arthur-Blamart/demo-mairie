import { usePageTitle } from '../hooks/usePageTitle';
import './Contact.css';

const Contact = () => {
  usePageTitle('Contact');
  
  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-header">
          <h1>Nous contacter</h1>
          <p>Nous sommes à votre service pour toute question ou démarche administrative</p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Coordonnées</h2>
            <div className="contact-card">
              <h3>📍 Adresse</h3>
              <p>
                Mairie de Ville<br/>
                Place de la République<br/>
                12345 Ville<br/>
                France
              </p>
            </div>

            <div className="contact-card">
              <h3>📞 Téléphone</h3>
              <p>
                Standard: 01 23 45 67 89<br/>
                Fax: 01 23 45 67 90
              </p>
            </div>

            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>
                contact@ville.fr<br/>
                etat-civil@ville.fr<br/>
                urbanisme@ville.fr
              </p>
            </div>

            <div className="contact-card">
              <h3>🕒 Horaires d'ouverture</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Lundi - Vendredi</span>
                  <span className="time">8h30 - 12h00 / 13h30 - 17h30</span>
                </div>
                <div className="hour-item">
                  <span className="day">Samedi</span>
                  <span className="time">9h00 - 12h00</span>
                </div>
                <div className="hour-item">
                  <span className="day">Dimanche</span>
                  <span className="time closed">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Nous écrire</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nom et prénom *</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Objet *</label>
                <select id="subject" name="subject" required>
                  <option value="">Choisir un objet</option>
                  <option value="etat-civil">État civil</option>
                  <option value="urbanisme">Urbanisme</option>
                  <option value="elections">Élections</option>
                  <option value="scolaire">Affaires scolaires</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Nous trouver</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>📍 Plan d'accès</h3>
              <p>
                La mairie est située en centre-ville, accessible par les transports en commun
                et disposant d'un parking gratuit.
              </p>
              <div className="transport-info">
                <div className="transport-item">
                  <span className="transport-icon">🚌</span>
                  <span>Arrêt "Mairie" - Lignes 1, 3, 7</span>
                </div>
                <div className="transport-item">
                  <span className="transport-icon">🚗</span>
                  <span>Parking gratuit 2h - Place de la République</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

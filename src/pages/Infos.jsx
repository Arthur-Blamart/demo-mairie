import { usePageTitle } from '../hooks/usePageTitle';
import './Infos.css';

const Infos = () => {
  usePageTitle('Informations pratiques');
  
  return (
    <div className="infos-page">
      <div className="container">
        <header className="infos-header">
          <h1>Informations pratiques</h1>
          <p>Toutes les informations utiles pour vos démarches et la vie quotidienne</p>
        </header>

        <div className="infos-content">
          <section className="info-section">
            <h2>🏛️ Mairie</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Horaires d'ouverture</h3>
                <div className="hours-list">
                  <div className="hour-item">
                    <span>Lundi - Vendredi</span>
                    <span>8h30 - 12h00 / 13h30 - 17h30</span>
                  </div>
                  <div className="hour-item">
                    <span>Samedi</span>
                    <span>9h00 - 12h00</span>
                  </div>
                  <div className="hour-item">
                    <span>Dimanche</span>
                    <span className="closed">Fermé</span>
                  </div>
                </div>
              </div>
              <div className="info-card">
                <h3>Contact</h3>
                <p>📍 Place de la République, 12345 Ville</p>
                <p>📞 01 23 45 67 89</p>
                <p>📧 contact@ville.fr</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🚌 Transports</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Transports en commun</h3>
                <p>🚌 Arrêt "Mairie" - Lignes 1, 3, 7</p>
                <p>🚇 Station de métro la plus proche: République (5 min à pied)</p>
                <p>🚂 Gare SNCF: 2 km du centre-ville</p>
              </div>
              <div className="info-card">
                <h3>Stationnement</h3>
                <p>🅿️ Parking gratuit 2h - Place de la République</p>
                <p>🅿️ Parking payant - Rue de la Paix</p>
                <p>🚲 Stationnement vélos sécurisé devant la mairie</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🏥 Services d'urgence</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Numéros d'urgence</h3>
                <div className="emergency-numbers">
                  <div className="emergency-item">
                    <span className="number">15</span>
                    <span className="service">SAMU</span>
                  </div>
                  <div className="emergency-item">
                    <span className="number">17</span>
                    <span className="service">Police</span>
                  </div>
                  <div className="emergency-item">
                    <span className="number">18</span>
                    <span className="service">Pompiers</span>
                  </div>
                  <div className="emergency-item">
                    <span className="number">112</span>
                    <span className="service">Urgences européennes</span>
                  </div>
                </div>
              </div>
              <div className="info-card">
                <h3>Services de proximité</h3>
                <p>🏥 Hôpital: 10 min en voiture</p>
                <p>💊 Pharmacies: 3 pharmacies en centre-ville</p>
                <p>👮 Gendarmerie: Rue de la Liberté</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🗑️ Environnement</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Collecte des déchets</h3>
                <div className="waste-schedule">
                  <div className="waste-item">
                    <span className="waste-type">🗑️ Ordures ménagères</span>
                    <span>Mardi et Vendredi</span>
                  </div>
                  <div className="waste-item">
                    <span className="waste-type">♻️ Recyclage</span>
                    <span>Jeudi</span>
                  </div>
                  <div className="waste-item">
                    <span className="waste-type">🌿 Déchets verts</span>
                    <span>Samedi (mars à novembre)</span>
                  </div>
                </div>
              </div>
              <div className="info-card">
                <h3>Déchèterie</h3>
                <p>📍 Zone industrielle, Route de la Vallée</p>
                <p>🕒 Lundi-Samedi: 8h-18h</p>
                <p>🕒 Dimanche: 9h-12h</p>
                <p>📞 01 23 45 67 99</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🎓 Éducation</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Écoles</h3>
                <p>🏫 École maternelle Les Platanes</p>
                <p>🏫 École élémentaire Jean Jaurès</p>
                <p>🏫 Collège Victor Hugo</p>
                <p>🏫 Lycée République</p>
              </div>
              <div className="info-card">
                <h3>Bibliothèque municipale</h3>
                <p>📚 Horaires:</p>
                <p>Mardi, Jeudi, Vendredi: 14h-18h</p>
                <p>Mercredi: 10h-12h / 14h-18h</p>
                <p>Samedi: 10h-17h</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🎯 Loisirs & Culture</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Équipements sportifs</h3>
                <p>🏊 Piscine municipale</p>
                <p>⚽ Stade municipal</p>
                <p>🏃 Gymnase Jean Moulin</p>
                <p>🎾 Tennis club (4 courts)</p>
              </div>
              <div className="info-card">
                <h3>Espaces culturels</h3>
                <p>🎭 Salle des fêtes</p>
                <p>🎨 Centre culturel</p>
                <p>🎵 École de musique</p>
                <p>🌳 Parc municipal</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Infos;

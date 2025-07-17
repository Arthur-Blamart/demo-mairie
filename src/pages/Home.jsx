import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import './Home.css';

const Home = () => {
  usePageTitle('Accueil');
  
  // Données d'exemple pour les articles
  const articles = [
    {
      id: 1,
      title: "Nouveau parc inauguré au centre-ville",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "15 Juillet 2025",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Travaux de rénovation de la bibliothèque",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "10 Juillet 2025",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Fête de la musique - Programme complet",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "8 Juillet 2025",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="home">
      {/* Section Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue à la Mairie de Ville</h1>
          <p>Votre administration locale au service des citoyens</p>
          <Link to="/services" className="cta-button">
            Découvrir nos services
          </Link>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Hôtel de ville" />
        </div>
      </section>

      {/* Section actualités */}
      <section className="news-section">
        <div className="container">
          <h2>Actualités de la ville</h2>
          <div className="news-grid">
            {articles.map(article => (
              <div key={article.id} className="news-card">
                <img src={article.image} alt={article.title} />
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <p className="news-date">{article.date}</p>
                  <p>{article.excerpt}</p>
                  <Link to={`/articles/${article.id}`} className="read-more">
                    Lire la suite
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="news-footer">
            <Link to="/articles" className="view-all">
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Section services rapides */}
      <section className="quick-services">
        <div className="container">
          <h2>Services en ligne</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Démarches administratives</h3>
              <p>Effectuez vos démarches en ligne rapidement et facilement</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3>État civil</h3>
              <p>Demandes d'actes de naissance, mariage, décès</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Urbanisme</h3>
              <p>Permis de construire, déclarations de travaux</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📞</div>
              <h3>Contact</h3>
              <p>Nous contacter pour toute question ou information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section photo gallery */}
      <section className="photo-gallery">
        <div className="container">
          <h2>Notre ville en images</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Place de la mairie" />
              <div className="gallery-overlay">
                <h3>Place de la mairie</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Parc municipal" />
              <div className="gallery-overlay">
                <h3>Parc municipal</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Bibliothèque" />
              <div className="gallery-overlay">
                <h3>Bibliothèque</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Centre sportif" />
              <div className="gallery-overlay">
                <h3>Centre sportif</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

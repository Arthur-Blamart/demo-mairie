import { useParams } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import './Articles.css';

const Articles = () => {
  const { id } = useParams();
  
  // Données d'exemple pour les articles complets
  const articles = [
    {
      id: 1,
      title: "Nouveau parc inauguré au centre-ville",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
      date: "15 Juillet 2025",
      author: "Service Communication",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Urbanisme"
    },
    {
      id: 2,
      title: "Travaux de rénovation de la bibliothèque",
      content: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`,
      date: "10 Juillet 2025",
      author: "Direction des Services Techniques",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Travaux"
    },
    {
      id: 3,
      title: "Fête de la musique - Programme complet",
      content: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.

Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,
      date: "8 Juillet 2025",
      author: "Service Culturel",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Culture"
    },
    {
      id: 4,
      title: "Inscription scolaire pour la rentrée 2025",
      content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.`,
      date: "5 Juillet 2025",
      author: "Service Scolaire",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Éducation"
    },
    {
      id: 5,
      title: "Nouveaux horaires d'ouverture de la mairie",
      content: `Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.`,
      date: "3 Juillet 2025",
      author: "Services Généraux",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Infos pratiques"
    }
  ];

  // Si on a un ID, on affiche un article spécifique
  if (id) {
    const article = articles.find(article => article.id === parseInt(id));
    
    // Utiliser le titre de l'article pour le titre de la page
    usePageTitle(article ? article.title : 'Article non trouvé');
    
    if (!article) {
      return (
        <div className="articles-page">
          <div className="container">
            <h1>Article non trouvé</h1>
            <p>L'article que vous recherchez n'existe pas.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="articles-page">
        <div className="container">
          <article className="article-detail">
            <header className="article-header">
              <div className="article-category">{article.category}</div>
              <h1>{article.title}</h1>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-author">Par {article.author}</span>
              </div>
            </header>
            
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            
            <div className="article-content">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Sinon, on affiche la liste des articles
  usePageTitle('Actualités');
  
  return (
    <div className="articles-page">
      <div className="container">
        <header className="articles-header">
          <h1>Actualités de la ville</h1>
          <p>Retrouvez toutes les informations et actualités de votre commune</p>
        </header>

        <div className="articles-grid">
          {articles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className="article-category-badge">{article.category}</div>
              </div>
              <div className="article-content">
                <h2>{article.title}</h2>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-author">Par {article.author}</span>
                </div>
                <p>{article.content.substring(0, 150)}...</p>
                <a href={`/articles/${article.id}`} className="read-more-btn">
                  Lire la suite
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;

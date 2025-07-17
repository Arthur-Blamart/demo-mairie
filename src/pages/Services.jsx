import { usePageTitle } from '../hooks/usePageTitle';
import './Services.css';

const Services = () => {
  usePageTitle('Services');
  
  const services = [
    {
      id: 1,
      title: "État Civil",
      description: "Actes de naissance, mariage, décès, livret de famille",
      icon: "📋",
      details: [
        "Acte de naissance",
        "Acte de mariage",
        "Acte de décès",
        "Livret de famille",
        "Reconnaissance anticipée"
      ]
    },
    {
      id: 2,
      title: "Urbanisme",
      description: "Permis de construire, déclarations de travaux, certificats d'urbanisme",
      icon: "🏗️",
      details: [
        "Permis de construire",
        "Déclaration préalable",
        "Certificat d'urbanisme",
        "Permis de démolir",
        "Permis d'aménager"
      ]
    },
    {
      id: 3,
      title: "Élections",
      description: "Inscription sur les listes électorales, procurations",
      icon: "🗳️",
      details: [
        "Inscription liste électorale",
        "Procuration de vote",
        "Carte d'électeur",
        "Attestation d'inscription",
        "Radiation des listes"
      ]
    },
    {
      id: 4,
      title: "Carte d'identité & Passeport",
      description: "Demande et renouvellement de papiers d'identité",
      icon: "🆔",
      details: [
        "Carte nationale d'identité",
        "Passeport",
        "Renouvellement",
        "Première demande",
        "Perte ou vol"
      ]
    },
    {
      id: 5,
      title: "Démarches Scolaires",
      description: "Inscription scolaire, cantine, transport scolaire",
      icon: "🎒",
      details: [
        "Inscription scolaire",
        "Cantine scolaire",
        "Transport scolaire",
        "Activités périscolaires",
        "Certificat de scolarité"
      ]
    },
    {
      id: 6,
      title: "Logement",
      description: "Demande de logement social, attestations d'hébergement",
      icon: "🏠",
      details: [
        "Demande logement social",
        "Attestation d'hébergement",
        "Certificat de résidence",
        "Dossier locataire",
        "Aide au logement"
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <header className="services-header">
          <h1>Services municipaux</h1>
          <p>Retrouvez tous les services et démarches administratives disponibles en mairie</p>
        </header>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="contact-info">
          <h2>Horaires d'ouverture</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <h3>Lundi à Vendredi</h3>
              <p>8h30 - 12h00</p>
              <p>13h30 - 17h30</p>
            </div>
            <div className="hours-card">
              <h3>Samedi</h3>
              <p>9h00 - 12h00</p>
              <p className="closed">Fermé l'après-midi</p>
            </div>
            <div className="hours-card">
              <h3>Dimanche</h3>
              <p className="closed">Fermé</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container" style={{padding: '10rem 0', textAlign: 'center'}}>
        <h2>Projet non trouvé</h2>
        <Link to="/" className="btn primary">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      {/* Hero */}
      <section className="project-hero">
        <div className="container">
          <div style={{textAlign: 'left', marginBottom: '1rem'}}>
            <Link to="/" className="btn-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Retour aux projets
            </Link>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <h1>{project.title}</h1>
            <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto'}}>
              {project.shortDescription}
            </p>
            
            <div className="tags-container" style={{marginTop: '2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              {project.tags.map(tag => (
                <span key={tag} className="tag-pill" style={{
                  background: 'rgba(99, 102, 241, 0.1)', 
                  color: 'var(--primary-color)', 
                  padding: '0.3rem 1rem', 
                  borderRadius: '50px',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  fontSize: '0.9rem'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="details-grid">
          
          {/* Main Content */}
          <div className="details-content">
            <div className="card">
              <h3 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>Description Détaillée</h3>
              <div className="markdown-content">
                <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
              </div>
            </div>

            {/* Gallery Section */}
            {project.images && project.images.length > 0 && (
              <div className="gallery-section" style={{marginTop: '3rem'}}>
                <h3 style={{marginBottom: '1.5rem'}}>Galerie du Projet</h3>
                <div className="gallery-grid">
                  {project.images.map((img, index) => (
                    <div key={index} className="gallery-item">
                      <img 
                        src={`${import.meta.env.BASE_URL}${img}`} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        style={{width: '100%', height: 'auto', display: 'block'}} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="features-list" style={{marginTop: '2rem'}}>
                <h3 style={{marginBottom: '1rem'}}>Fonctionnalités Clés</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                    {project.features.map((feature, i) => (
                        <li key={i} style={{marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-secondary)'}}>
                            <span style={{position: 'absolute', left: 0, color: 'var(--secondary-color)'}}>✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="details-sidebar">
            <div className="card" style={{position: 'sticky', top: '100px'}}>
              <h3 style={{marginBottom: '1.5rem', fontSize: '1.2rem'}}>Stack Technique</h3>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <div key={index} style={{marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem'}}>
                    <strong style={{display: 'block', color: 'var(--text-primary)'}}>{tech.name}</strong>
                    <span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

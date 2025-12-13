import React from 'react';

const projectsData = [
  { 
    id: 1, 
    title: 'Maintenance Prédictive par l\'IA (Suprajit Morocco)', 
    description: 'Conception d\'une solution IA pour prévoir les pannes machines, réduire les temps d\'arrêt et analyser les causes racines pour optimiser la performance industrielle.', 
    tags: ['Intelligence Artificielle', 'Maintenance Prédictive', 'Analyse de données'] 
  },
  { 
    id: 2, 
    title: 'Plateforme de Gestion SAV (Kiinov)', 
    description: 'Développement Full Stack d\'une plateforme de gestion des retours produits et du service après-vente pour améliorer l\'expérience client.', 
    tags: ['Full Stack', 'Web Development', 'Optimisation opérationnelle'] 
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mes Projets</h2>
        <div className="project-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {project.tags.map(tag => (
                  <span key={tag} style={{fontSize: '0.8rem', background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', padding: '0.2rem 0.5rem', borderRadius: '4px'}}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

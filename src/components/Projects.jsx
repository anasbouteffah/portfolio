import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mes Projets</h2>
        <div className="project-grid">
          {projectsData.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-card" style={{display: 'block', textDecoration: 'none'}}>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <div style={{marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {project.tags.map(tag => (
                  <span key={tag} style={{fontSize: '0.8rem', background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', padding: '0.2rem 0.5rem', borderRadius: '4px'}}>{tag}</span>
                ))}
              </div>
              <div style={{marginTop: '1rem', color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 'bold'}}>
                Voir les détails →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

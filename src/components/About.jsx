import React from 'react';

const About = () => {
  return (
    <section id="about" className="about" style={{padding: '5rem 0', background: 'var(--surface-color)'}}>
      <div className="container">
        <h2>À propos de moi</h2>
        <div className="about-content" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)'}}>
            <strong>Ingénieur en Intelligence Artificielle</strong>, je suis fraîchement diplômé d'un <strong>Master en Intelligence Artificielle et Science des Données</strong> à la FST Tanger (2025). Je suis également titulaire d'une <strong>Licence en Génie Informatique</strong> (2023).
          </p>
          <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)'}}>
           Ma force réside dans ma double compétence : je combine l'analyse de données avancée (Data Science) avec la capacité technique de construire des solutions logicielles complètes et performantes (Full Stack). Passionné par l'innovation, je transforme les données complexes en applications intuitives et intelligentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

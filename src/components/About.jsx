import React from 'react';

const About = () => {
  return (
    <section id="about" className="about" style={{padding: '5rem 0', background: 'var(--surface-color)'}}>
      <div className="container">
        <h2>À propos de moi</h2>
        <h3 className="about-subtitle">L'intersection entre le Code et la Donnée.</h3>
        
        <div className="about-text-container">
          <p>
            <strong>Ingénieur en Intelligence Artificielle</strong> et diplômé d'un Master en IA & Sciences des Données à la FST de Tanger (Promo 2025), mon parcours est guidé par une curiosité insatiable pour la technologie. Ayant d'abord solidifié mes bases techniques avec une Licence en Génie Informatique (2023), j'ai choisi de me spécialiser pour comprendre non seulement comment construire des logiciels, mais comment les rendre intelligents.
          </p>
          <p>
            Ce qui me distingue aujourd'hui, c'est ma <strong>double compétence</strong>. Je ne me contente pas d'entraîner des modèles prédictifs complexes ; je possède l'expertise Full Stack nécessaire pour les intégrer dans des architectures web robustes, scalables et intuitives.
          </p>
          <p>
            Mon objectif ? <strong>Combler le fossé entre la théorie de la Data Science et la réalité du développement applicatif.</strong> Je transforme des données brutes en solutions concrètes qui apportent une réelle valeur ajoutée aux utilisateurs.
          </p>
        </div>

        <div className="about-cards">
            <div className="highlight-card">
                <div className="highlight-icon">🧠</div>
                <h4>Intelligence Artificielle</h4>
                <p>Modélisation prédictive, Deep Learning et Data Science appliquée pour rendre les systèmes intelligents.</p>
            </div>
            <div className="highlight-card">
                <div className="highlight-icon">💻</div>
                <h4>Développement Full Stack</h4>
                <p>Création d'architectures web robustes et scalables (React, Node, Python) pour déployer l'IA.</p>
            </div>
            <div className="highlight-card">
                <div className="highlight-icon">🚀</div>
                <h4>Vision Produit</h4>
                <p>Transformer des données complexes en solutions utilisateurs concrètes et intuitives.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

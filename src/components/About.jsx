import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        
        <div className="about-glass-panel">
          <div className="about-header">
            <h2 className="section-title">À PROPOS <span className="dot">.</span></h2>
            <h3 className="about-tagline">
              Architecte de la Donnée. <br/>
              <span className="gradient-text">Développeur de Solutions.</span>
            </h3>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Je suis <strong>Anas Bouteffah Touiki</strong>, titulaire d'un <strong>Master en Data Science</strong>. J'ai orienté mon parcours académique vers l'Intelligence Artificielle et l'étude approfondie des données massives.
              </p>
              <p>
                Au cours de ma formation d'ingénieur, j'ai développé une <strong>solide rigueur mathématique</strong> indispensable à la modélisation complexe. Ma spécialisation universitaire m'a permis d'acquérir les fondements théoriques nécessaires pour concevoir des architectures innovantes et performantes.
              </p>
              
              <div className="about-badges">
                <span className="badge">🎓 Master IASD (2025)</span>
                <span className="badge">☁️ AWS Certified</span>
                <span className="badge">🚀 Full Stack Expert</span>
              </div>
            </div>

            <div className="highlight-grid">
               <div className="highlight-item">
                  <div className="icon-box">🧠</div>
                  <div>
                    <h4>Intelligence Artificielle</h4>
                    <p>De la théorie à la pratique : NLP, RAG, Computer Vision.</p>
                  </div>
               </div>
               <div className="highlight-item">
                  <div className="icon-box">⚡</div>
                  <div>
                    <h4>Big Data & Cloud</h4>
                    <p>Traitement massivement parallèle (Spark, Kafka) et architectures scalables.</p>
                  </div>
               </div>
               <div className="highlight-item">
                  <div className="icon-box">🛠️</div>
                  <div>
                    <h4>Ingénierie Logicielle</h4>
                    <p>Code propre, patterns robustes et interfaces réactives (React, Node).</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

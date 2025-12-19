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
                Je suis <strong>Anas Bouteffah Touiki</strong>, un ingénieur passionné par la fusion entre l'analyse de données massive et l'ingénierie logicielle. 
                Diplômé d'un <strong>Master en IA & Data Science</strong>, je ne vois pas le code comme une finalité, mais comme un outil pour résoudre des problèmes complexes.
              </p>
              <p>
                Mon approche est <strong>hybride</strong> : capable de concevoir des modèles mathématiques avancés (Machine Learning, Deep Learning) tout en développant les 
                applications robustes (Full Stack) nécessaires pour les rendre utilisables par le monde réel.
              </p>
              
              <div className="about-badges">
                <span className="badge">🎓 Master IASD (2025)</span>
                <span className="badge">💻 Full Stack Exp.</span>
                <span className="badge">🚀 Product Mindset</span>
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

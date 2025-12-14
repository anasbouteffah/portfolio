import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="profile-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile.jpg`} 
                alt="Anas Bouteffah Touiki" 
                className="profile-img" 
              />
            </div>
          </div>

          <div className="hero-text">
            <h1>Anas Bouteffah Touiki <br /><span className="highlight">Data Scientist & Ingénieur IA</span> <br /> <span style={{fontSize: '0.6em', color: 'var(--text-secondary)'}}>| Full Stack Developer</span></h1>
            <p>Passionné par la conception de solutions intelligentes, la modélisation prédictive et le développement d'applications performantes.</p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem'}}>
                <a href="#projects" className="btn primary">Voir mes projets</a>
                <a href="#contact" className="btn" style={{background: 'rgba(255,255,255,0.1)'}}>Me contacter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Anas Bouteffah Touiki <br /><span className="highlight">Data Scientist & Ingénieur IA</span> <br /> <span style={{fontSize: '0.6em', color: 'var(--text-secondary)'}}>| Full Stack Developer</span></h1>
        <p>Passionné par la conception de solutions intelligentes, la modélisation prédictive et le développement d'applications performantes.</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <a href="#projects" className="btn primary">Voir mes projets</a>
            <a href="#contact" className="btn" style={{background: 'rgba(255,255,255,0.1)'}}>Me contacter</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

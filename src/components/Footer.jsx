import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Anas Bouteffah Touiki. Tous droits réservés.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-secondary)'}}>
            boutanas8@gmail.com | Tanger, Maroc
        </p>
        <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <a href="https://www.linkedin.com/in/anas-bouteffah-482177253/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/anasbouteffah" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

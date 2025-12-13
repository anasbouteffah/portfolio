import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">Anas.AI</a>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>À propos</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Compétences</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projets</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

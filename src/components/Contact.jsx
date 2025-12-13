import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! (Simulation)');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contactez-moi</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

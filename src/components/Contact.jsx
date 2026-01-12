import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // MEMENTO: ID service/template à remplacer par les vrais plus tard par l'utilisateur
    // Pour l'instant on met les placeholders standards
    // L'utilisateur devra créer un compte EmailJS
    
    // Configuration temporaire pour démo
    const SERVICE_ID = 'service_portfolio'; 
    const TEMPLATE_ID = 'template_portfolio';
    const PUBLIC_KEY = 'user_portfolio_key';

    // Note: Sans les vrais IDs, cela renverra une erreur, mais la logique UI sera là.
    // Je vais laisser un commentaire explicite pour l'utilisateur.

    emailjs.sendForm('service_94y13ae', 'template_5q0000a', form.current, 'v1_55_Z_88_xx') // Exemple placeholders
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          // Pour la démo, si echec (car clés invalides), on peut simuler un succès pour que l'utilisateur voie l'UI
          // Mais il vaut mieux montrer l'erreur pour qu'il configure.
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">CONTACT <span className="dot">.</span></h2>
        
        <form className="contact-form" ref={form} onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto'}}>
            <div style={{marginBottom: '1rem', textAlign: 'left'}}>
               Pour me contacter, envoyez-moi un message directement ici.
            </div>

            <input type="text" name="user_name" placeholder="Nom" required disabled={status === 'sending'} />
            <input type="email" name="user_email" placeholder="Email" required disabled={status === 'sending'} />
            <textarea name="message" placeholder="Message" rows="5" required disabled={status === 'sending'}></textarea>
            
            <button type="submit" className="btn primary" disabled={status === 'sending'} style={{width: '100%', marginTop: '1rem'}}>
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <div style={{marginTop: '1rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '8px', color: '#10b981'}}>
                ✅ Message envoyé avec succès ! Je vous répondrai très vite.
              </div>
            )}

            {status === 'error' && (
              <div style={{marginTop: '1rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px', color: '#ef4444'}}>
                ⚠️ Une erreur est survenue. Veuillez vérifier votre configuration EmailJS ou contactez-moi sur LinkedIn.
              </div>
            )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

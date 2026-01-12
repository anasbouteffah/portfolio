import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://formsubmit.co/ajax/boutanas8@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });

        const result = await response.json();

        if (response.ok) {
            setStatus('success');
            e.target.reset();
        } else {
            console.error("FormSubmit Error:", result);
            setStatus('error');
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">CONTACT <span className="dot">.</span></h2>
        
        <form className="contact-form" onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto'}}>
            <div style={{marginBottom: '1rem', textAlign: 'left', color: 'var(--text-secondary)'}}>
               Envoyez-moi un message pour toute opportunité ou collaboration.
            </div>

            {/* Hidden Configurations for FormSubmit */}
            <input type="hidden" name="_subject" value="Nouveau message depuis le Portfolio !" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input type="text" name="name" placeholder="Votre Nom" required disabled={status === 'sending' || status === 'success'} />
            <input type="email" name="email" placeholder="Votre Email" required disabled={status === 'sending' || status === 'success'} />
            <textarea name="message" placeholder="Votre Message" rows="5" required disabled={status === 'sending' || status === 'success'}></textarea>
            
            <button type="submit" className="btn primary" disabled={status === 'sending' || status === 'success'} style={{width: '100%', marginTop: '1rem'}}>
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '8px', color: '#10b981'}}>
                <strong>✅ Message envoyé !</strong><br/>
                Merci de m'avoir contacté. Je vérifierai ma boîte <em>boutanas8@gmail.com</em> et je vous répondrai rapidement.
              </div>
            )}

            {status === 'error' && (
              <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px', color: '#ef4444'}}>
                ⚠️ Oups, une erreur est survenue.<br/>
                Vous pouvez m'envoyer un email direct à : <a href="mailto:boutanas8@gmail.com" style={{color: 'inherit', textDecoration: 'underline'}}>boutanas8@gmail.com</a>
              </div>
            )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [captchaToken, setCaptchaToken] = useState(null);
    const captchaRef = useRef(null);

    // Clé de test (développement) fournie par Google : 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
    // L'utilisateur devra mettre sa propre SITE KEY ici pour la production.
    const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; 

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!captchaToken) {
            alert("Veuillez valider le CAPTCHA SVP.");
            return;
        }

        setStatus('sending');

        const formData = new FormData(e.target);
        
        // On n'envoie pas le token g-recaptcha-response à FormSubmit car en version gratuite AJAX ils ne le valident pas strict.
        // Mais la protection CLIEN empêche déjà l'envoi automatisé basique sans interaction JS.
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
                setCaptchaToken(null);
                captchaRef.current.reset(); // Reset visuel du captcha
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
                    <input type="hidden" name="_captcha" value="false" /> {/* On gère le captcha nous-même en front */}
                    <input type="hidden" name="_template" value="table" />

                    <input type="text" name="name" placeholder="Votre Nom" required disabled={status === 'sending' || status === 'success'} />
                    <input type="email" name="email" placeholder="Votre Email" required disabled={status === 'sending' || status === 'success'} />
                    <textarea name="message" placeholder="Votre Message" rows="5" required disabled={status === 'sending' || status === 'success'}></textarea>
                    
                    <div style={{margin: '1rem 0', display: 'flex', justifyContent: 'center'}}>
                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey={RECAPTCHA_SITE_KEY}
                            onChange={handleCaptchaChange}
                            theme="dark" // ou "light" selon votre thème
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn primary" 
                        disabled={status === 'sending' || status === 'success' || !captchaToken} 
                        style={{
                            width: '100%', 
                            marginTop: '1rem',
                            opacity: !captchaToken ? 0.5 : 1,
                            cursor: !captchaToken ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>

                    {status === 'success' && (
                        <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '8px', color: '#10b981'}}>
                            <strong>✅ Message envoyé !</strong><br/>
                            Je vous répondrai rapidement.
                        </div>
                    )}

                    {status === 'error' && (
                        <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px', color: '#ef4444'}}>
                            ⚠️ Oups, une erreur est survenue.<br/>
                            <a href="mailto:boutanas8@gmail.com" style={{color: 'inherit'}}>boutanas8@gmail.com</a>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;

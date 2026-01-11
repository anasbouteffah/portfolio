import React from 'react';

const certifications = [
  {
    id: 1,
    title: "AWS Educate Networking",
    description: "Fondamentaux des réseaux cloud, VPC, et sécurité.",
    image: import.meta.env.BASE_URL + "images/certifications/aws-networking.png",
    link: "https://www.credly.com/badges/66c4e2c3-9022-48eb-ac8e-c300ead6c68c/public_url"
  },
  {
    id: 2,
    title: "AWS Cloud Computing 101",
    description: "Introduction complète aux services AWS et à l'architecture cloud.",
    image: import.meta.env.BASE_URL + "images/certifications/aws-cloud-101.png",
    link: "https://www.credly.com/badges/3652cdc3-5802-43fa-8194-c774f0a77e4b/public_url"
  },
  {
    id: 3,
    title: "AWS Educate Storage",
    description: "Maîtrise des solutions de stockage AWS (S3, EBS, EFS).",
    image: import.meta.env.BASE_URL + "images/certifications/aws-storage.png",
    link: "https://www.credly.com/badges/863101da-af75-4808-9709-c08a936c5cb6/public_url"
  },
  {
    id: 4,
    title: "AWS Educate Compute",
    description: "Déploiement et gestion des instances EC2 et services de calcul.",
    image: import.meta.env.BASE_URL + "images/certifications/aws-compute.png",
    link: "https://www.credly.com/badges/4c782193-696a-4bcf-9d4c-2a17f385e10f/public_url"
  },
  {
    id: 5,
    title: "IBM: Introduction to Data Engineering",
    description: "Fondamentaux du Data Engineering, Écosystème Big Data et Cycle de vie de la donnée.",
    image: import.meta.env.BASE_URL + "images/certifications/ibm-data-engineering.png",
    link: "https://www.coursera.org/account/accomplishments/verify/6CSFQRSZQNRX"
  },
  {
    id: 6,
    title: "IBM: Python for Data Science, AI & Development",
    description: "Programmation Python avancée, manipulation de données (Pandas/NumPy) et introduction aux APIs.",
    image: import.meta.env.BASE_URL + "images/certifications/ibm-data-engineering.png",
    link: "https://coursera.org/share/4ea5283be1bc5fd9cd9e57269fd3087f"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <h2 className="section-title" style={{ justifyContent: 'center', marginBottom: '4rem' }}>
          CERTIFICATIONS <span className="dot">.</span>
        </h2>
        
        <div className="cert-grid">
          {certifications.map((cert) => (
            <a 
              key={cert.id} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-card"
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>
                <div className="cert-link">Voir Certificat ↗</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

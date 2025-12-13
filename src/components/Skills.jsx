import React from 'react';

const skillCategories = [
  {
    title: 'IA & Data Science',
    skills: ['Machine Learning (SVM, Clustering)', 'Deep Learning (CNN, LSTM)', 'NLP', 'TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    title: 'Langages',
    skills: ['Python', 'Java', 'C++', 'SQL', 'R']
  },
  {
    title: 'Data & Big Data',
    skills: ['Pandas', 'Power BI', 'Tableau', 'Hadoop', 'Spark', 'MongoDB', 'MySQL']
  },
  {
    title: 'Développement Web',
    skills: ['React.js', 'Node.js', 'Laravel', 'Docker']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills" style={{padding: '5rem 0'}}>
      <div className="container">
        <h2>Compétences Techniques</h2>
        <div className="skills-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card" style={{background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-color)'}}>{category.title}</h3>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {category.skills.map(skill => (
                  <li key={skill} style={{color: 'var(--text-secondary)', display: 'flex', alignItems: 'center'}}>
                    <span style={{marginRight: '0.5rem', color: 'var(--secondary-color)'}}>▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

export const projectsData = [
  { 
    id: 1, 
    title: 'Maintenance Prédictive par l\'IA (Suprajit Morocco)', 
    shortDescription: 'Développement d\'une solution de maintenance prédictive pour la réduction des temps d\'arrêt (PFE Master IASD).',
    fullDescription: `### Synthèse du Projet
Ce projet de fin d'études, réalisé en collaboration avec **Suprajit Morocco**, avait pour objectif principal de passer d'une maintenance réactive (corrective) à une maintenance prédictive (Industrie 4.0). L'enjeu était d'anticiper les pannes machines pour réduire drastiquement les temps d'arrêt non planifiés.

### La Solution
Une application de bureau complète ("Desktop App") intégrant :
- Un **module prédictif** évaluant le risque de panne.
- Un **système de recommandation** suggérant des actions correctives.
- Un **tableau de bord interactif** pour le suivi des KPI.

### Architecture IA & Modélisation
Pour pallier l'absence de capteurs temps réel, nous avons exploité l'historique des interventions avec une approche séquentielle sophistiquée :

**1. Prédiction des Pannes (Architecture à deux étages)**
- *Étage 1 (Détection globale)* : Modèle **BiLSTM** (Bidirectional LSTM) pour prédire le risque de panne à 24h, capturant les dépendances temporelles longues.
- *Étage 2 (Raffinement)* : Modèle **BiGRU** classifiant l'urgence (Critique 0-3h vs Modérée 3-15h).

**2. Recommandation d'Actions (Approche Hybride)**
- *Sémantique* : Clustering K-Means sur embeddings **SBERT** pour retrouver des pannes historiques similaires.
- *Générative* : Utilisation du LLM **LLaMA 3** (fine-tuné) pour générer des solutions contextuelles inédites.

### Résultats
- **Précision** : Le modèle de détection critique a atteint un **Rappel de 87.8%** et un **F1-score de 88.2%**.
- **Déploiement** : Solution déployée en local sur l'infrastructure de l'usine.`,
    images: [
      'projects/suprajit/dashboard_overview.png',
      'projects/suprajit/analytics_charts.png',
      'projects/suprajit/prediction_table.png',
      'projects/suprajit/insights_histogram.png'
    ],
    tags: ['Deep Learning', 'BiLSTM/BiGRU', 'LLaMA 3 (GenAI)', 'Python', 'PyQt6'],
    technologies: [
      { name: 'Python', category: 'Backend & IA' },
      { name: 'TensorFlow / Keras', category: 'Deep Learning (BiLSTM/BiGRU)' },
      { name: 'SBERT / LLaMA 3', category: 'NLP & GenAI' },
      { name: 'PyQt6', category: 'Interface Desktop' },
      { name: 'Microsoft SQL Server', category: 'Base de Données' },
      { name: 'Power BI', category: 'Visualisation' }
    ],
    features: [
      'Prédiction des pannes (Critique/Modérée)',
      'Recommandation d\'actions par IA Générative',
      'Dashboard KPI Temps Réel',
      'Architecture Hybride (Deep Learning + LLM)'
    ]
  },
  { 
    id: 2, 
    title: 'Plateforme de Gestion SAV (Kiinov)', 
    shortDescription: 'Développement Full Stack d\'une plateforme de gestion des retours produits et du service après-vente pour améliorer l\'expérience client.', 
    fullDescription: `Développement complet d'une solution SaaS pour Kiinov, destinée à optimiser la gestion du Service Après-Vente (SAV).

La plateforme centralise toutes les demandes de retour, suit leur état en temps réel et automatise la communication avec les clients. Elle inclut également un module de statistiques pour analyser les défauts récurrents des produits.`,
    images: [], 
    tags: ['Full Stack', 'Web Development', 'Optimisation opérationnelle', 'React', 'Node.js'],
    technologies: [
      { name: 'React.js', category: 'Frontend' },
      { name: 'Node.js / Express', category: 'Backend' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'Docker', category: 'DevOps' }
    ],
    features: [
      'Suivi des tickets SAV en temps réel',
      'Portail client pour les demandes de retour',
      'Notifications automatiques',
      'Analytics et reporting pour le management'
    ]
  }
];

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
    shortDescription: 'Développement Full Stack d\'une application Web (MEAN Stack) pour digitaliser la gestion du service après-vente (PFE Licence).', 
    fullDescription: `### Synthèse du Projet
Ce projet de fin d'études (Licence) a été réalisé en collaboration avec **Kiinov** et la FST de Tanger. L'objectif principal était de digitaliser entièrement le processus de gestion des retours produits (SAV), passant de méthodes manuelles à une solution Web centralisée et performante.

### La Solution
Une **plateforme Web Full Stack** (Single Page Application) permettant de :
- Créer et suivre les tickets de retour en temps réel.
- Vérifier l'éligibilité au remboursement et la garantie.
- Prendre et formaliser les décisions (Remboursement, Échange, Réparation).
- Analyser les performances via un tableau de bord (KPIs par type de panne, délais, décisions).

### Architecture Technique (MVC)
L'application repose sur une architecture moderne séparant clairement les responsabilités :
- **Frontend** : Angular (TypeScript) pour une interface utilisateur réactive et fluide.
- **Backend** : Node.js & Express servant d'API RESTful.
- **Data** : MongoDB (NoSQL) pour un stockage flexible des documents (tickets, décisions).
- **Conception** : Modélisation UML complète (Diagrammes de Cas d'Utilisation, Classes, Séquences) avant développement.

### Résultats
- **85% des objectifs** atteints durant le stage.
- **Méthodologie Agile XP** appliquée pour des livraisons itératives.
- **Fonctionnalités clés** : Clonage de dossiers, édition de décisions, filtrage dynamique des retours.`,
    images: [
      'projects/kiinov/sav_form.png',
      'projects/kiinov/decisions_table.png',
      'projects/kiinov/returns_list.png',
      'projects/kiinov/returns_grid.png'
    ],
    tags: ['MEAN Stack', 'Angular', 'Node.js', 'MongoDB', 'UML', 'Agile XP'],
    technologies: [
      { name: 'Angular (TypeScript)', category: 'Frontend' },
      { name: 'Node.js / Express', category: 'Backend' },
      { name: 'MongoDB Atlas', category: 'Base de Données' },
      { name: 'HTML5 / SCSS', category: 'Web Design' },
      { name: 'PowerAMC / UML', category: 'Conception' },
      { name: 'GitLab', category: 'Collaboration' }
    ],
    features: [
      'Gestion dynamique des tickets de retour',
      'Prise de décision formelle (Remboursement/Échange)',
      'Tableau de Bord KPIs',
      'Architecture SPA (Single Page Application)'
    ]
  ,
  {
    id: 3,
    title: 'Prédiction du Risque de Crédit (Machine Learning)',
    shortDescription: 'Étude comparative de modèles (Régression Logistique vs Processus Gaussiens) pour la classification de risque financier.',
    fullDescription: `### Synthèse du Projet
Ce projet explore la mise en œuvre de techniques avancées d'apprentissage automatique pour une problématique financière critique : la prédiction du risque de crédit. L'objectif était de déterminer si un demandeur représente un "bon" ou un "mauvais" risque de crédit.

### Approche Méthodologique
L'étude s'est concentrée sur la comparaison de deux paradigmes distincts :
- **Méthode Classique** : Régression Logistique (Modèle paramétrique simple et interprétable).
- **Méthode Avancée** : Processus Gaussiens (Modèle probabiliste non-paramétrique capturant des relations complexes).

### Processus Technique
1.  **Data Analysis** : Exploration du jeu de données "German Credit Data" (UCI) pour isoler les facteurs d'influence.
2.  **Preprocessing** : Nettoyage et préparation des variables pour l'entraînement.
3.  **Modélisation** : Implémentation et tuning des algorithmes sous Python (Scikit-learn).
4.  **Comparaison** : Analyse des performances (Accuracy, Robustesse).

### Résultats
L'étude a révélé une **similarité de performance** entre les deux modèles sur ce dataset spécifique. Cela démontre que pour certains problèmes structurés, la robustesse de la Régression Logistique peut égaler la complexité des Processus Gaussiens, soulignant l'importance de choisir le bon outil pour le bon problème (Occam's razor).`,
    images: [], // Images non fournies pour l'instant
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Financial Risk'],
    technologies: [
      { name: 'Python', category: 'Langage' },
      { name: 'Scikit-learn', category: 'Bibliothèque ML' },
      { name: 'Logistic Regression', category: 'Algorithme' },
      { name: 'Gaussian Processes', category: 'Algorithme' },
      { name: 'UCI Repository', category: 'Dataset' }
    ],
    features: [
      'Classification Binaire (Risque Bon/Mauvais)',
      'Comparaison Modèles (Paramétrique vs Probabiliste)',
      'Analyse Exploratoire de Données Financières',
      'Validation Croisée et Évaluation'
    ]
  }
];

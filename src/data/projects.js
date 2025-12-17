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
  },
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
  },
  {
    id: 4,
    title: 'DataInsight Machine Learning (No-Code GUI)',
    shortDescription: 'Application de bureau complète pour démocratiser le Machine Learning (Nettoyage, Visualisation, Modélisation) sans écrire de code.',
    fullDescription: `### Synthèse du Projet
Réalisé dans le cadre du Master IASD, ce projet vise à **démocratiser l'accès au Machine Learning**. "DataInsight" est une application de bureau qui permet aux utilisateurs non-experts de charger, nettoyer, visualiser et modéliser des données sans écrire une seule ligne de code.

### Fonctionnalités Clés
L'application couvre l'intégralité du pipeline Data Science :
1.  **Gestion des Données** : Import CSV, détection automatique des types.
2.  **Prétraitement (Data Cleaning)** :
    *   Imputation des valeurs manquantes.
    *   Détection d'outliers.
    *   Encodage (Label Encoding) et Scaling.
3.  **Visualisation Interactive** : Génération de graphiques (Scatter, BoxPlot, Heatmap...) via l'interface.
4.  **Modélisation (ML Hub)** :
    *   *Supervisé* : Régression, Random Forest, SVM, KNN...
    *   *Non-supervisé* : K-Means.
    *   *Deep Learning* : Réseaux de neurones simples.
5.  **Évaluation** : Matrices de confusion et rapports de métriques (F1, Precision, Recall).

### Stack Technologique
Ce projet "Full Python" démontre une capacité à créer des outils complexes :
*   **GUI** : \`Tkinter\` & \`tksheet\` pour l'interface utilisateur interactive.
*   **Moteur ML** : \`Scikit-learn\` encapsulé pour l'automatisation.
*   **Data** : \`Pandas\` & \`NumPy\` pour la manipulation.
*   **Viz** : \`Matplotlib\` / \`Seaborn\` intégrés dans l'interface.

### Conclusion
DataInsight prouve qu'il est possible de rendre des outils mathématiques complexes accessibles via une interface ergonomique, comblant le fossé entre expert technique et utilisateur métier.`,
    images: [], // Images non fournies
    tags: ['Python', 'Tkinter', 'No-Code', 'Scikit-learn', 'GUI'],
    technologies: [
      { name: 'Python', category: 'Langage' },
      { name: 'Tkinter', category: 'Interface (GUI)' },
      { name: 'Scikit-learn', category: 'Machine Learning' },
      { name: 'Pandas', category: 'Data Manipulation' },
      { name: 'Matplotlib', category: 'Visualisation' }
    ],
    features: [
      'Interface No-Code pour Data Science',
      'Pipeline Automatisé (Cleaning -> Modeling)',
      'Visualisation de Données Embarquée',
      'Support Multi-Algorithmes (Reg, Classif, Clustering)'
    ]
  },
  {
    id: 5,
    title: 'Analyse de Sentiments Twitter Temps Réel (Big Data)',
    shortDescription: 'Architecture Big Data scalable (Kafka, Spark Streaming) pour la prédiction de sentiments en temps réel.',
    fullDescription: `### Synthèse du Projet
Ce projet "Big Data", réalisé dans le cadre du Master IASD, met en œuvre une architecture complète pour ingérer et analyser des flux de données massifs en temps réel. L'objectif : prédire le sentiment (Positif, Négatif, Neutre) de tweets à la volée.

### Architecture Technique
L'infrastructure repose sur un pipeline de données moderne et conteneurisé :
1.  **Ingestion (Streaming)** : **Apache Kafka** simule et transporte des flux continus de tweets.
2.  **Traitement (Processing)** : **Apache Spark (Streaming & MLlib)** assure le nettoyage (NLP/NLTK) et la classification vectorielle distribuée.
3.  **Stockage** : **MongoDB** sauvegarde les prédictions en format NoSQL pour une flexibilité maximale.
4.  **Visualisation** : Une interface Web (**Flask/Django**) restitue les résultats en temps réel.

### Défis & Compétences
-   **Scalabilité** : Conception d'un système capable de traiter des volumes massifs (Big Data) grâce au calcul distribué.
-   **Temps Réel** : Gestion de la latence et du débit via Kafka Streams.
-   **DevOps** : Déploiement reproductible via **Docker** et Docker Compose.
-   **Machine Learning Scalable** : Entraînement de modèles (Logistic Regression, XGBoost) sur Spark MLlib.

### Conclusion
Ce projet démontre une maîtrise de la chaîne de valeur de la donnée, de l'ingestion brute à l'insight actionnable, en utilisant les standards de l'industrie du Big Data.`,
    images: [], // Images non fournies
    tags: ['Big Data', 'Apache Spark', 'Kafka', 'MongoDB', 'Docker'],
    technologies: [
      { name: 'Apache Spark', category: 'Big Data Processing' },
      { name: 'Apache Kafka', category: 'Streaming' },
      { name: 'MongoDB', category: 'Base de Données NoSQL' },
      { name: 'Docker', category: 'DevOps' },
      { name: 'Python / Flask', category: 'Backend & Web' }
    ],
    features: [
      'Analyse de Sentiments en Temps Réel',
      'Pipeline Big Data (Kafka + Spark)',
      'Déploiement Conteneurisé (Docker)',
      'Dashboard de Visualisation Live'
    ]
  }
];

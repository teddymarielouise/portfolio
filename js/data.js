// js/data.js
const mesProjets = [
    {
        titre: "Pokedex",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        image: "images/site_pokemon_accueil.png",
        description: "Création d'un site responsive et dynamique en utilisant une API externe.",
        descriptionComplete: "Création d'un site responsive en HTML, CSS et JS sur le thème de Pokémon en utilisant une API externe. Gestion de plusieurs pages, du design du site et des différents éléments.",
        contraintes: "Cahier des charges : utilisation d'une API externe, affichage dynamique des Pokémons, tri en fonction du type, recherche via le nom ou l'id et pouvoir sauvegarder des Pokémons.",
    },
    {
        titre: "Portfolio Communautaire",
        tags: ["SQL", "SGBD", "PHP", "BackEnd", "FrontEnd"],
        image: "images/fd1.jpg",
        description: "Conception d'un site de portfolio communautaire ainsi que d'une base de données.",
        descriptionComplete: "Développement complet d'un schéma de base de données ainsi que d'un site de portfolio communautaire. Le projet inclut la modélisation conceptuelle, la création des tables et l'injection de données de façon sécurisée et la gestion des données des utilisateurs.",
        contraintes: "Manipulation rigoureuse du SQL : création de tables, injection de jeux de tests, requêtes complexes et mise en place de contraintes d'intégrité pour garantir la cohérence des données., ainsi que la sécurisation du site contre les attaques courantes (injections SQL, XSS, etc.) et la gestion des sessions pour l'authentification des utilisateurs.",
    },
    {
        titre: "Système de Gestion Scolaire (ENT)",
        tags: ["SQL", "SGBD",],
        image: "images/bdd.png",
        description: "Conception d'une base de données relationnelle modélisant un Environnement Numérique de Travail (ENT).",
        descriptionComplete: "Développement complet d'un schéma de base de données pour un collège. Le projet inclut la modélisation conceptuelle, la création des tables et l'injection de données cohérentes pour simuler un établissement réel.",
        contraintes: "Manipulation rigoureuse du SQL : création de tables, injection de jeux de tests, requêtes complexes et mise en place de contraintes d'intégrité pour garantir la cohérence des données.",
    },
    {
        titre: "Workflow & Collaboration Forge",
        tags: ["Git", "Forge", "Collaboration"],
        image: "images/image_forge.png",
        description: "Maîtrise de la gestion de projets via Git et les outils de forge logicielle.",
        descriptionComplete: "Acquisition de compétences avancées sur la gestion de projets individuels et collectifs. Utilisation de flux de travail professionnels pour assurer la pérennité et la traçabilité du code.",
        contraintes: "Mise en œuvre d'un workflow Git avancé : gestion des branches, réalisation de merges et rebases, et résolution de conflits complexes en environnement collaboratif.",
    },
    {
        titre: "Recodage de Commandes Système",
        tags: ["C", "Shell"],
        image: "images/c.jpg",
        description: "Réimplémentation des commandes UNIX 'cat' et 'tr' en langage C.",
        descriptionComplete: "Développement en autonomie des utilitaires stu_cat et stu_tr. Ce projet explore les mécanismes profonds des systèmes UNIX et la manipulation de flux de données.",
        contraintes: "Utilisation d'appels système (read/write), gestion dynamique de la mémoire (malloc), manipulation de pointeurs (char **) et création d'une bibliothèque standard propriétaire.",
    },
    {
        titre: "Administration OS & Virtualisation",
        tags: ["Linux", "Windows", "OS", "VMware"],
        image: "images/linux-and-windows.png",
        description: "Étude comparative et installation d'environnements systèmes Windows et Linux.",
        descriptionComplete: "Apprentissage de l'architecture matérielle et des solutions de virtualisation. Installation, configuration et optimisation d'environnements Linux et Windows pour des besoins spécifiques.",
        contraintes: "Configuration de machines virtuelles, installation d'un OS Linux en Dualboot sur matériel physique et compréhension approfondie des systèmes de fichiers.",
    },
    {
        titre: "Architecture Réseau Entreprise",
        tags: ["Réseau", "IP", "Cisco", "Infrastructure"],
        image: "images/administration-reseau.jpg",
        description: "Conception et déploiement simulé d'une infrastructure réseau sous Cisco Packet Tracer.",
        descriptionComplete: "Modélisation complète d'un réseau d'entreprise incluant le plan d'adressage IP et la configuration des équipements selon un cahier des charges professionnel.",
        contraintes: "Conception d'un plan d'adressage IP hiérarchisé, segmentation réseau et respect des contraintes de performance et de sécurité imposées par l'architecture.",
    },
    {
        titre: "Algorithmique IA : Graphes",
        tags: ["Python", "Algorithmique"],
        image: "images/algo.png",
        description: "Implémentation d'algorithmes de recherche de chemin dans des structures de données complexes.",
        descriptionComplete: "Découverte et application des fondamentaux de l'IA via l'étude des graphes. Développement d'outils de résolution de problèmes par exploration de chemins.",
        contraintes: "Programmation en Python d'algorithmes de recherche en largeur (BFS) et en profondeur (DFS) pour trouver des solutions optimales dans un graphe.",
    }
];

const filtreContent = {
    categories: ["Développement", "Base de Données", "Système", "Réseau"],
    tags: ["Python", "Algorithmique", "C", "Shell", "Linux", "Windows", "OS", "VMware", "Réseau", "IP", "Cisco", "Infrastructure"]
};
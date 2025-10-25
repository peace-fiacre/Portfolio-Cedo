export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  category: 'Electronique' | 'Programmation' | 'Maintenance' | 'Conception';
  githubUrl?: string;
  demoUrl?: string;
  date: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Système de Contrôle de Température Tables Chauffantes",
    description: "Développement d'un système de contrôle de température pour tables chauffantes en néonatalogie, maintenant une température constante de 37°C pour la sécurité des nouveaux-nés. Le système utilise un thermocouple pour mesurer la température et contrôle les résistances chauffantes via un relais.",
    technologies: ["Arduino UNO", "Thermocouple", "Proteus", "Arduino IDE", "Relais"],
    category: "Electronique",
    date: "2025",
    image: "/images/table-chauffante.jpg"
  },
  {
    id: 2,
    title: "Système de Surveillance Périmétrique par Ultrasons",
    description: "Conception d'un système de sécurité intelligent pour la surveillance des champs agricoles utilisant des capteurs à ultrasons. Le système détecte les intrusions dans le périmètre de sécurité et alerte via un écran LCD et un buzzer.",
    technologies: ["Arduino UNO", "LCD I2C", "Capteur Ultrasons", "Buzzer", "Wire.h", "LiquidCrystal_I2C"],
    category: "Electronique",
    date: "2025",
    image: "/images/Picture3.png"
  },
  {
    id: 3,
    title: "Modélisation et Peinture 3D d'un Moteur Hydraulique",
    description: "Réalisation du texturing et de la peinture numérique d'un modèle 3D de moteur hydraulique. Ces moteurs, essentiels dans les systèmes de pompage de fluides, nécessitent une visualisation précise pour la compréhension de leur fonctionnement et leur maintenance.",
    technologies: ["Blender", "GrabCAD", "3D Texturing", "Digital Painting"],
    category: "Conception",
    date: "2025",
    image: "/images/Picture4.png"
  },
  {
    id: 4,
    title: "Station Météo Domestique",
    description: "Conception d'une station météo connectée permettant de surveiller en temps réel la température et l'humidité de votre environnement intérieur. Ce système aide à optimiser le confort de votre espace de vie en fournissant des données précises et instantanées sur un écran LCD.",
    technologies: ["Arduino UNO", "DHT11", "LCD I2C", "DHT.h", "Wire.h", "LiquidCrystal_I2C"],
    category: "Electronique",
    date: "2025",
    image: "/images/Picture5.png"
  },
  {
    id: 5,
    title: "Design 3D d'une Coupe à Boisson",
    description: "Conception élégante d'une coupe moderne réalisée entièrement sous Fusion 360. Ce projet démontre ma maîtrise de la modélisation de surfaces complexes et du design de produits destinés à un usage quotidien, avec une attention particulière portée aux proportions et à l'esthétique.",
    technologies: ["Fusion 360", "Design de Produit", "Modélisation de Surface"],
    category: "Conception",
    date: "2025",
    image: "/images/Picture6.png"
  },
  {
    id: 6,
    title: "Système de Pose Réservoir Intelligent",
    description: "Modélisation 3D d'un système de pose réservoir intégrant un contrôle de niveau d'eau. Cette conception technique allie esthétique industrielle et fonctionnalité pratique, permettant une installation et une maintenance simplifiées tout en garantissant un contrôle précis du niveau d'eau.",
    technologies: ["Fusion 360", "CAO", "Design Technique", "Modélisation Paramétrique"],
    category: "Conception",
    date: "2025",
    image: "/images/Picture7.png"
  },
  {
    id: 7,
    title: "Conception 3D d'un Robinet Design",
    description: "Création d'un modèle 3D de robinet alliant ergonomie et style contemporain. Ce projet met en valeur ma capacité à concevoir des objets du quotidien avec une approche moderne, en portant une attention particulière aux détails techniques comme le mécanisme interne et aux aspects esthétiques comme les courbes fluides et les finitions.",
    technologies: ["Fusion 360", "Design Industriel", "Modélisation Mécanique"],
    category: "Conception",
    date: "2025",
    image: "/images/Picture8.png"
  },
  {
    id: 8,
    title: "Modélisation 3D d'un Manomètre de Précision",
    description: "Conception détaillée d'un manomètre industriel sous Fusion 360. Ce projet technique met en évidence ma capacité à modéliser des instruments de mesure complexes, en respectant les contraintes de précision et les standards industriels. La modélisation inclut les mécanismes internes et l'interface de lecture, démontrant ma compréhension approfondie des instruments de mesure.",
    technologies: ["Fusion 360", "CAO de Précision", "Design d'Instrumentation"],
    category: "Conception",
    date: "2025",
    image: "/images/Picture9.png"
  }
];
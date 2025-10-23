export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  category: 'électronique' | 'programmation' | 'maintenance' | 'conception';
  githubUrl?: string;
  demoUrl?: string;
  date: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Système de Monitoring Biomédical",
    description: "Conception et implémentation d'un système de surveillance des équipements biomédicaux avec alertes en temps réel.",
    technologies: ["Arduino", "C++", "Capteurs", "IoT"],
    category: "électronique",
    date: "2024"
  },
  {
    id: 2,
    title: "Automatisation de Maintenance",
    description: "Développement d'un système automatisé pour la planification et le suivi des maintenances préventives.",
    technologies: ["Python", "Raspberry Pi", "Base de données"],
    category: "programmation",
    date: "2024"
  },
  {
    id: 3,
    title: "Système de Contrôle d'Accès",
    description: "Conception d'un système de contrôle d'accès intelligent pour zones sensibles hospitalières.",
    technologies: ["Microcontrôleur PIC", "Électronique", "RFID"],
    category: "conception",
    date: "2023"
  }
];
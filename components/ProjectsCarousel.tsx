'use client';

import ProjectCard from "./ProjectCard";
import { Project } from "../data/projects";

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const scrollProjects = (direction: 'left' | 'right') => {
    const container = document.getElementById('projects-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Flèche gauche */}
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 nav-button"
        onClick={() => scrollProjects('left')}
        aria-label="Projets précédents"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Conteneur de projets avec défilement horizontal */}
      <div 
        id="projects-container"
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {projects.map((project) => (
          <div key={project.id} className="flex-none w-[350px] snap-center transform hover:-translate-y-2 transition-all duration-300">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 nav-button"
        onClick={() => scrollProjects('right')}
        aria-label="Projets suivants"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
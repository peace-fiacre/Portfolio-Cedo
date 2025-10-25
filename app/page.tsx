import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { projects } from "../data/projects";
import Image from 'next/image';

export default function Home() {

  return (
    <main className="container mx-auto px-4 sm:px-6 max-w-7xl mt-24">
      {/* Section Héros */}
      <section className="py-12 mb-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
          {/* Photo de profil */}
          <div className="relative group">
            <div className="w-64 h-64 bg-gray-100 overflow-hidden shadow-lg">
              <Image 
                src="/images/profile.jpg" 
                alt="Photo de Cédric DJOHOZIN" 
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Texte d'introduction */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Cédric DJOHOZIN
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
              Programmateur des Microcontrôleurs & Concepteur de systèmes automatiques et intelligents
            </h2>
            <p className="text-gray-600 mb-8 italic text-lg">
              I&apos;m not a genius, that&apos;s why I will work all the time.
            </p>
            <div className="inline-block">
              <a
                href="#projects"
                className="block bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700"
                style={{
                  color: '#ffffff',
                  backgroundColor: '#2563eb',
                }}
              >
                Voir mes projets
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-32"> {/* Conteneur avec espacement vertical uniforme */}
        <AboutSection />
        <SkillsSection />
      </div>

      {/* Section Projets (placeholders) */}
      <section id="projects" className="mt-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white -z-10 rounded-3xl opacity-70"></div>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Projets
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Découvrez mes projets réalisés
          </p>
        </div>
        
        <ProjectsCarousel projects={projects} />
      </section>

      <div className="mt-32">
        <ContactSection />
      </div>
    </main>
  );
}

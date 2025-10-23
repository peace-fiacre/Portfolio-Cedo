import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import { projects } from "../data/projects";

export default function Home() {

  return (
    <main className="container mx-auto px-4 sm:px-6 max-w-7xl mt-24">
      {/* Section Héros */}
      <section className="text-center sm:text-left py-12 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          Cédric DJOHOZIN
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-2xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((p, idx) => (
            <div key={idx} className="transform hover:-translate-y-2 transition-all duration-300">
              <ProjectCard />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-32">
        <ContactSection />
      </div>
    </main>
  );
}

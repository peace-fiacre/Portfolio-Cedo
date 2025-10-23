import { Project } from "../data/projects";
import Image from 'next/image';

type ProjectCardProps = Partial<Project>;

export default function ProjectCard({
  title = "Titre à remplir",
  description = "Description à remplir",
  image,
  technologies = [],
  category,
  date,
  githubUrl,
  demoUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full sm:w-[300px] transform transition duration-300 hover:scale-105">
      {image ? (
        <Image 
          src={image} 
          alt={title || 'Image du projet'} 
          width={300}
          height={160}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400">Image à ajouter</div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            {category && (
              <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full mt-1 inline-block">
                {category}
              </span>
            )}
          </div>
          {date && <span className="text-sm text-gray-500">{date}</span>}
        </div>

        <p className="text-gray-700 mb-4">{description}</p>
        
        {technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Code source
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Voir le projet
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

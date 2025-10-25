export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#2563eb' }} className="sticky top-0 z-50 py-4 shadow-lg">
      <div className="container max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <span style={{ color: '#ffffff' }} className="font-bold text-lg">Cédric DJOHOZIN</span>
          <span style={{ color: '#ffffff' }} className="text-sm">• Programmeur & Concepteur</span>
        </div>

        <div className="space-x-6 flex items-center">
          <a href="#about" style={{ color: '#ffffff' }} className="hover:text-blue-100">À propos</a>
          <a href="#projects" style={{ color: '#ffffff' }} className="hover:text-blue-100">Projets</a>
          <a href="#skills" style={{ color: '#ffffff' }} className="hover:text-blue-100">Compétences</a>
          <a href="#contact" style={{ color: '#ffffff' }} className="hover:text-blue-100">Contact</a>

          {/* Lien vers le CV dans public */}
          <a href="/CV_Cedric_DJOHOZIN.pdf" 
             style={{ backgroundColor: '#ffffff', color: '#2563eb' }}
             className="ml-4 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50" 
             download>
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}

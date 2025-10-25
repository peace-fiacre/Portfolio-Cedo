export default function Footer() {
  return (
    <footer className="bg-blue-50 dark:bg-black text-gray-700 dark:text-gray-200 p-6 mt-20">
      <div className="container mx-auto text-center">
        <p className="font-bold opacity-100 text-center">
          <span className="text-blue-600 dark:text-white">© {new Date().getFullYear()} Cédric DJOHOZIN — Concepteur de maintenance.</span>
        </p>
        <div className="mt-2 space-x-4">
          <a href="mailto:concepteurdemaintenance@gmail.com" className="underline hover:text-blue-600">
            concepteurdemaintenance@gmail.com
          </a>
          <span>•</span>
          <a 
            href="http://www.linkedin.com/in/concepteurdemaintenance" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-bold opacity-100 text-center mt-4">
          <span className="text-blue-600 dark:text-white">Réalisé par Peace_Fiacre</span>
        </p>
      </div>
    </footer>
  );
}

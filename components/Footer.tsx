export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-6 mt-20">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Cédric DJOHOZIN — Concepteur de maintenance.</p>
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
      </div>
    </footer>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="mt-20 mb-20">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <p className="text-gray-700">
        Email :{" "}
        <a href="mailto:concepteurdemaintenance@gmail.com" className="underline text-blue-600 hover:text-blue-800">
          concepteurdemaintenance@gmail.com
        </a>
      </p>

      <p className="text-gray-700 mt-2">
        LinkedIn :{" "}
        <a 
          href="http://www.linkedin.com/in/concepteurdemaintenance" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline text-blue-600 hover:text-blue-800"
        >
          linkedin.com/in/concepteurdemaintenance
        </a>
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        {/* Le CV : déposer le fichier PDF dans public/CV_Cedric_DJOHOZIN.pdf */}
        <a 
          href="/CV_Cedric_DJOHOZIN.pdf" 
          download 
          className="block bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition-all duration-200 text-center"
          style={{
            color: '#ffffff',
            backgroundColor: '#2563eb',
          }}
        >
          Télécharger le CV (PDF)
        </a>

        <a 
          href="mailto:concepteurdemaintenance@gmail.com" 
          className="block bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition-all duration-200 text-center"
          style={{
            color: '#ffffff',
            backgroundColor: '#2563eb',
          }}
        >
          Envoyer un e-mail
        </a>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="mt-20 mb-20">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <p className="text-gray-700">
        Email :{" "}
        <a href="mailto:concepteurdemaintenance@gmail.com" className="underline text-blue-600">
          concepteurdemaintenance@gmail.com
        </a>
      </p>

      <p className="text-gray-700 mt-2">LinkedIn : <span className="text-gray-500">lien à fournir</span></p>

      <div className="mt-6 flex gap-4">
        {/* Le CV : déposer le fichier PDF dans public/CV_Cedric_DJOHOZIN.pdf */}
        <a href="/CV_Cedric_DJOHOZIN.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Télécharger le CV (PDF)
        </a>

        <a href="mailto:concepteurdemaintenance@gmail.com" className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">
          Envoyer un e-mail
        </a>
      </div>
    </section>
  );
}

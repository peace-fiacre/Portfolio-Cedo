import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="mt-20">
      <h2 className="text-2xl font-semibold mb-4">À propos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
        {/* colonne texte */}
        <div className="sm:col-span-2">
          <p className="text-gray-700 mb-4">
            <strong>Parcours scolaire :</strong><br />
            Certificat d'Aptitude Professionnel en Électricité — Lycée Technique et Professionnel de Porto-Novo<br />
            Baccalauréat en Électrotechnique — Lycée Technique et Professionnel de Porto-Novo<br />
            Diplôme du Technicien Industriel — Lycée Technique et Professionnel de Porto-Novo
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Parcours professionnel :</strong><br />
            - Formation en montage des paraboles, systèmes photovoltaïques et montage des caméras de surveillance (CeFoRE SONON).<br />
            - Stage en installation électrique bâtiment. (Nom de l&apos;entreprise à compléter).<br />
            - Stage en rembobinage (à compléter).<br />
            - Stage au service de Maintenance de l&apos;hôpital de Zone Covè.<br />
            - Stage en Maintenance Biomédicale au Centre Hospitalier Départemental ZOU.
          </p>

          <p className="text-gray-700">
            <strong>Domaines de spécialité :</strong><br />
            Conception des systèmes automatiques et intelligents pour résoudre des problèmes de maintenance.
          </p>

          <p className="mt-4 text-gray-600 italic">« On peut ne pas connaître tout mais on doit savoir où tout se trouve. »</p>
        </div>

        {/* colonne photo / contact rapide */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-gray-100 rounded-md overflow-hidden mb-4">
            {/* déposer la photo dans public/images/profile.jpg */}
            <Image 
              src="/images/profile.jpg" 
              alt="Photo de Cédric DJOHOZIN" 
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-700">Email :</p>
            <a href="mailto:concepteurdemaintenance@gmail.com" className="text-blue-600 hover:underline">
              concepteurdemaintenance@gmail.com
            </a>
            <p className="text-sm text-gray-500 mt-2">LinkedIn : lien à ajouter</p>
          </div>
        </div>
      </div>
    </section>
  );
}

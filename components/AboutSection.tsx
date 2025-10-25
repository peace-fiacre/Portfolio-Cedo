import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="mt-20">
      <h2 className="text-2xl font-semibold mb-4">À propos</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 mb-6">
          <strong>Parcours scolaire :</strong><br />
          Certificat d&apos;Aptitude Professionnel en Électricité — Lycée Technique et Professionnel de Porto-Novo<br />
          Baccalauréat en Électrotechnique — Lycée Technique et Professionnel de Porto-Novo<br />
          Diplôme du Technicien Industriel — Lycée Technique et Professionnel de Porto-Novo
        </p>

        <p className="text-gray-700 mb-6">
          <strong>Parcours professionnel :</strong><br />
          - Formation en montage des paraboles, systèmes photovoltaïques et montage des caméras de surveillance (CeFoRE SONON).<br />
          - Stage en installation électrique bâtiment.<br />
          - Stage en rembobinage au SERIB (Service de Rembobinage Industriel et de Bâtiment).<br />
          - Stage au service de Maintenance de l&apos;hôpital de Zone Covè.<br />
          - Stage en Maintenance Biomédicale au Centre Hospitalier Départemental ZOU.
        </p>

        <p className="text-gray-700 mb-6">
          <strong>Domaines de spécialité :</strong><br />
          Conception des systèmes automatiques et intelligents pour résoudre des problèmes de maintenance.
        </p>

        <p className="text-gray-600 italic text-lg text-center">
          « On peut ne pas connaître tout mais on doit savoir où tout se trouve. »
        </p>
      </div>
    </section>
  );
}

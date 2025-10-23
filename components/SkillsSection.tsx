export default function SkillsSection() {
  const skills = [
    "Maintenance d’équipements biomédicaux",
    "Programmation des microcontrôleurs PIC 16F84A",
    "Conception des PCB",
    "Modélisation 3D (Fusion / Blender / FreeCAD)",
    "Programmation : Python, C++",
    "Maintenance du parc médical",
    "Rédaction d'audits et rapports de maintenance",
    "Calibration et optimisation de dispositifs médicaux",
    "Électronique & microcontrôleurs (Arduino, Raspberry Pi)",
    "Logiciels : KiCad, Fusion 360, Proteus, Multisim, Arduino IDE, XRelays, VSCode, Anaconda (Spyder), FreeCAD"
  ];

  return (
    <section id="skills" className="mt-20">
      <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

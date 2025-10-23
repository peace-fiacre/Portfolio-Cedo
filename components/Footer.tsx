export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-6 mt-20">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Cédric DJOHOZIN — Concepteur de maintenance.</p>
        <p className="mt-2">Email : <a href="mailto:concepteurdemaintenance@gmail.com" className="underline">concepteurdemaintenance@gmail.com</a></p>
      </div>
    </footer>
  );
}

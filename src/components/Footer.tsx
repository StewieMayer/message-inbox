import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Antonio Amaya. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/stewiemayer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/antonioamayastc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:stewiemayer@hotmail.com"
            className="hover:text-white transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

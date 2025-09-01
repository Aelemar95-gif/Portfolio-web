import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Julian duarte - Consultor SAP & Analista de Datos
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span>Desarrollado con</span>
            <Heart size={16} className="text-red-500" />
            <span>y React + TailwindCSS</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-700 text-center">
          <p className="text-xs text-slate-400">
            Disponible para proyectos freelance y oportunidades de colaboración
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
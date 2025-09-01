import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code, Award, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: User },
    { id: 'proyectos', label: 'Proyectos', icon: Code },
    { id: 'habilidades', label: 'Habilidades', icon: Award },
    { id: 'contacto', label: 'Contacto', icon: MessageCircle }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-slate-800">
            JDev - Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
            <div className="py-4 space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                >
                  <Icon size={20} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
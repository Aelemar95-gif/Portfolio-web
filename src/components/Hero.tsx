import React, { useState } from 'react';
// Importa los íconos que se usan en el componente
import { Download, MapPin, Mail, Phone } from 'lucide-react';

// Componente principal Hero
const Hero = () => {
  // Estado para controlar si se muestra la foto (true) o las iniciales (false)
  const [showPhoto, setShowPhoto] = useState(true);
  
  // URL de la imagen de perfil
  const photoUrl = "/img/foto_cv_boina.jpeg";

  return (
    // Sección principal con fondo degradado y padding superior
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Grid para dividir el contenido en dos columnas en pantallas grandes */}
        <div className="grid  lg:grid-cols-2 gap-12 items-center">
          {/* Columna de contenido principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Título principal */}
              <h1 className="text-4xl sm:text-2xl lg:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Sobre mi
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Consultor SAP &
                <span className="text-blue-700 dark:text-blue-400 block">Analista de Datos</span>
              </h1>
              {/* Descripción breve */}
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Estudiante avanzado de Licenciatura en Sistemas con formación en SAP S/4HANA FI y análisis de datos. Experiencia en proyectos funcionales y reportes con Power BI, Excel y SQL. </p>
              {/* Frase destacada */}
              <p className="text-l text-blue-500 dark:text-blue-400 leading-relaxed"> Me destaco por pensamiento analítico, adaptabilidad y compromiso. Busco crecer como Consultor SAP Junior o Analista de Datos.
              </p>
            </div>

            {/* Botones de acción: Descargar CV y Contactar */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botón para descargar el CV (debería ser un <a> para descargar realmente) */}
              <a
                href="/Julian_Duarte_CV_Harvard.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center px-8 py-4 bg-blue-700 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
              <Download className="mr-2" size={20} />
              <span>Descargar CV</span>
            </a>

              {/* Botón para hacer scroll suave a la sección de contacto */}
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                <Mail className="mr-2" size={20} />
                Contactar
              </button>
            </div>

            {/* Información adicional: ubicación y disponibilidad */}
            <div className="flex flex-wrap gap-6 text-slate-600 dark:text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-blue-700 dark:text-blue-400" />
                <span>Argentina</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-700 dark:text-blue-400" />
                <span>Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Tarjeta de perfil a la derecha */}
          <div className="lg:justify-self-end">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 max-w-md">
              <div className="text-center space-y-6">
                {/* Avatar con iniciales */}
                <div 
                  className="w-48 h-48 mx-auto rounded-full overflow-hidden cursor-pointer relative border-4 border-blue-700 dark:border-blue-600 p-1 hover:border-blue-800 dark:hover:border-blue-500 transition-colors duration-300"
                  onClick={() => setShowPhoto(!showPhoto)}
                  title="Haz clic para alternar entre foto e iniciales"
                >
                  {/* Imagen de perfil */}
                  <img
                    src={photoUrl}
                    alt="Julian Duarte"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-full"
                    style={{ opacity: showPhoto ? 1 : 0 }}
                  />
                  
                  {/* Iniciales JD */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-600 dark:to-blue-800 rounded-full"
                    style={{ opacity: showPhoto ? 0 : 1 }}
                  >
                    JD
                  </div>
                </div>
                
                {/* Nombre y título */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Julian Duarte</h3>
                  <p className="text-blue-700 dark:text-blue-400 font-semibold">Consultor SAP Junior</p>
                </div>

                {/* Formación y fortalezas */}
                <div className="space-y-3 text-left">
                  {/* Sección de formación */}
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Formación</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Estudiante </li>
                      <li>• Certificación SAP S/4HANA</li>
                      <li>• Curso Análisis de Datos con Python</li>
                    </ul>
                  </div>

                  {/* Sección de fortalezas */}
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Fortalezas</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Resolución analítica de problemas</li>
                      <li>• Comunicación efectiva</li>
                      <li>• Aprendizaje continuo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporta el componente Hero para usarlo en otras partes de la app
export default Hero;
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download
} from 'lucide-react';
import ContactForm from './ContactForm';

// Componente principal de Contacto
const Contact = () => {
  // Renderiza la sección de contacto
  return (
    <section id="contacto" className="py-20 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más detalles y 
            explorar cómo puedo aportar valor a tu organización
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 dark:bg-blue-600 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-slate-300 dark:text-slate-400 text-sm">Email</p>
                    <a href="mailto:duartejulian1995@gmail.com" className="text-white font-medium hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      duartejulian1995@gmail.com
                    </a>
                  </div>
                </div>
                {/* Teléfono */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 dark:bg-blue-600 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-slate-300 dark:text-slate-400 text-sm">Teléfono</p>
                    <a href="tel: +540111536536933" className="text-white font-medium hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      +54 011 15 3653-6933
                    </a>
                  </div>
                </div>
                {/* Ubicación */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 dark:bg-blue-600 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-slate-300 dark:text-slate-400 text-sm">Ubicación</p>
                    <p className="text-white font-medium">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-xl font-bold mb-6">Sígueme en</h3>
              <div className="flex space-x-4">
                <a 
                    href="https://www.linkedin.com/in/j-duarte-sistemas/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 group"
                >
                  <Linkedin size={24} className="group-hover:text-white" />
                </a>
                <a 
                  href="https://github.com/Aelemar95-gif" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200 group"
                >
                  <Github size={24} className="group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Descarga de CV */}
            <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3">Curriculum Vitae</h4>
              <p className="text-slate-300 dark:text-slate-400 mb-4 text-sm">
                Descarga mi CV completo con toda la información detallada sobre mi experiencia y formación.
              </p>
              <a
                href="/Julian_Duarte_CV_Harvard.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-700 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="mr-2" size={18} />
                Descargar CV (PDF)
              </a>
            </div>
          </div>

          {/* Formulario de contacto separado */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { ExternalLink, Github, Database, BarChart3, Settings, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Implementación SAP FI/CO",
      description: "Configuración módulos financieros y controlling para empresa manufacturera. Optimización de procesos contables y reporting financiero.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SAP FI", "SAP CO", "Reporting", "Business Process"],
      github: "#",
      demo: "#",
      icon: Settings
    },
    {
      title: "Dashboard de Ventas - Power BI",
      description: "Análisis completo de métricas de ventas con visualizaciones interactivas. KPIs, tendencias y forecasting para toma de decisiones.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Power BI", "SQL", "DAX", "Excel"],
      github: "#",
      demo: "#",
      icon: BarChart3
    },
    {
      title: "Análisis de Datos con Python",
      description: "Procesamiento y análisis de grandes volúmenes de datos empresariales. Limpieza, transformación y generación de insights.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      github: "#",
      demo: "#",
      icon: TrendingUp
    },
    {
      title: "ETL con SAP Data Services",
      description: "Diseño e implementación de procesos ETL para integración de múltiples fuentes de datos en SAP BW/4HANA.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SAP BW", "ETL", "Data Modeling", "ABAP"],
      github: "#",
      demo: "#",
      icon: Database
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Selección de proyectos y ejercicios prácticos que demuestran mi experiencia 
            en consultoría SAP y análisis de datos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                    <a 
                      href={project.github} 
                      className="inline-flex items-center px-4 py-2 bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </a>
                    <a 
                      href={project.demo} 
                      className="inline-flex items-center px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Ver Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <project.icon className="text-blue-700 dark:text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            <Github className="mr-2" size={20} />
            Ver todos los proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
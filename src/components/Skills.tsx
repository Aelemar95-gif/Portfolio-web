import React from 'react';
import "../styles/custom-bullets.css";
import { 
  Database, 
  BarChart3, 
  Code, 
  Server, 
  FileSpreadsheet,
  Brain,
  Users,
  Clock,
  MessageSquare,
  Target,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "SAP",
      icon: Server,
      color: "bg-blue-700",
      skills: [
        { name: "SAP S/4HANA" },
        { name: "SAP FI/CO" },
        { name: "SAP BW/4HANA" },
        { name: "SAP ABAP" }
      ]
    },
    {
      category: "Análisis de Datos",
      icon: BarChart3,
      color: "bg-green-600",
      skills: [
        { name: "SQL Server" },
        { name: "Power BI" },
        { name: "Python" },
        { name: "Excel Avanzado" }
      ]
    },
    {
      category: "Bases de Datos",
      icon: Database,
      color: "bg-purple-600",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Oracle" },
        { name: "MongoDB" }
      ]
    },
    {
      category: "Herramientas",
      icon: Code,
      color: "bg-orange-600",
      skills: [
        { name: "Jupyter Notebook" },
        { name: "Git/GitHub" },
        { name: "Tableau" },
        { name: "R" }
      ]
    }
  ];

  const personalSkills = [
    {
      name: "Comunicación Efectiva",
      description: "Capacidad para transmitir información técnica compleja de manera clara y comprensible",
      icon: MessageSquare,
      color: "text-blue-700"
    },
    {
      name: "Trabajo en Equipo",
      description: "Experiencia colaborando en equipos multidisciplinares y proyectos de gran envergadura",
      icon: Users,
      color: "text-green-600"
    },
    {
      name: "Gestión del Tiempo",
      description: "Organización eficiente de tareas y cumplimiento de deadlines en entornos de alta presión",
      icon: Clock,
      color: "text-purple-600"
    },
    {
      name: "Resolución de Problemas",
      description: "Enfoque analítico y sistemático para identificar y resolver problemas complejos",
      icon: Target,
      color: "text-orange-600"
    },
    {
      name: "Pensamiento Analítico",
      description: "Capacidad para descomponer problemas complejos y encontrar soluciones innovadoras",
      icon: Brain,
      color: "text-red-600"
    },
    {
      name: "Innovación",
      description: "Búsqueda constante de mejores prácticas y soluciones creativas a los desafíos",
      icon: Lightbulb,
      color: "text-yellow-600"
    }
  ];

  const categoryColors: Record<string, string> = {
    "blue-700": "#1d4ed8",
    "green-600": "#16a34a",
    "purple-600": "#9333ea",
    "orange-600": "#ea580c",
  };

  return (
    <section id="habilidades" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Technical Skills */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Dominio de tecnologías SAP, herramientas de análisis de datos y 
              bases de datos para ofrecer soluciones empresariales efectivas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 rounded-xl shadow-lg dark:shadow-xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className={`${category.color} p-3 rounded-lg mr-4`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.category}</h3>
                </div>
                {/*Tarjetas con lista de skills*/}
                
                {/*<div className="space-y-4">
                    <ul className={`list-disc pl-5 space-y-2 bullet-${category.color.replace('bg-', '')}`}>
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="font-medium bg-slate-100 p-2 rounded">
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/*Tarjetas con lista de skills*/}
                <div className="space-y-4 flex items-center">
                  <ul className="space-y-4 w-full mx-10">
                    {/*para que aparezca el bullet*/}
                    {/*className={`list-disc pl-5 space-y-2 bullet-${category.color.replace('bg-', '')}`} */}
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex font-medium bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-white p-2 rounded border-l-4"
                        style={{
                          borderLeftColor: categoryColors[category.color.replace('bg-', '')]
                        }}
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Skills */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Competencias Personales
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Habilidades interpersonales y metodológicas que complementan 
              mi perfil técnico para un desempeño integral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 rounded-xl shadow-lg dark:shadow-xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className={`${skill.color} p-3 bg-slate-50 dark:bg-slate-600 rounded-lg group-hover:bg-slate-100 dark:group-hover:bg-slate-500 transition-colors`}>
                    <skill.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-white dark:bg-slate-700 rounded-xl shadow-lg dark:shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Certificaciones</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "SAP S/4HANA Foundation",
              "Microsoft Power BI Data Analyst",
              "Google Data Analytics Certificate",
            ].map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-slate-100 dark:bg-slate-600 rounded-lg">
                <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                <span className="text-slate-800 dark:text-white font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { Code2, Database, Palette, Download, CheckCircle2 } from 'lucide-react';

const About = () => {
  const technologies = [
    { category: 'Frontend', icon: Palette, items: ['React', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS'] },
    { category: 'Backend', icon: Database, items: ['Flask', 'Django','PHP', 'MongoDB', 'PostgreSQL'] },
    { category: 'Herramientas', icon: Code2, items: ['Git', 'Figma', 'Postman'] }
  ];

  const highlights = [
    'Estudiante apasionada por el desarrollo web',
    'Experiencia en proyectos reales y colaborativos',
    'Enfoque en código limpio y mejores prácticas',
    'Aprendizaje constante de nuevas tecnologías'
  ];

  return (
    <section id="about" className="py-12 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-gray-100">
              Sobre Mí
            </h2>
            
            {/* Professional description */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg mb-8">
              <p>
                Soy <span className="text-gray-900 dark:text-gray-100 font-semibold">estudiante de desarrollo web</span> con 
                un enfoque en <span className="text-sky-500 dark:text-sky-400 font-semibold">Full Stack</span>, 
                aunque me apasiona especialmente el desarrollo Backend y la gestión de bases de datos.
              </p>
              <p>
                He trabajado en <span className="font-semibold text-gray-900 dark:text-gray-100">proyectos reales</span> que 
                me han permitido aplicar mis conocimientos en entornos colaborativos, desde aplicaciones web interactivas 
                hasta sistemas completos con bases de datos.
              </p>
              <p>
                Mi objetivo es seguir creciendo como desarrolladora, construyendo soluciones que no solo funcionen bien, 
                sino que también ofrezcan una <span className="text-cyan-400 font-semibold">excelente experiencia de usuario</span>.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CV Download Button */}
            <a
              href="/cv.pdf"
              download="CV_CeciliaGarcia.pdf"  // Cambia el nombre del archivo descargado
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Right Column - Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Tecnologías y Herramientas
            </h3>
            
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                      <Icon className="w-6 h-6 text-sky-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {tech.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Additional info box */}
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 border border-sky-200 dark:border-sky-900 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                💡 <span className="font-semibold">En constante aprendizaje:</span> Actualmente explorando 
                TypeScript y arquitecturas de microservicios para ampliar mis habilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
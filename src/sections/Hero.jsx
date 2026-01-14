import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ['Desarrolladora Full Stack', 'Frontend Developer', 'Backend Developer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Pausa antes de borrar
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Borrando
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          // Cambiar al siguiente rol
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100); // Más rápido al borrar

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-400/10 dark:bg-sky-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 bg-white dark:bg-slate-800 border border-sky-200 dark:border-sky-900 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Disponible para nuevos proyectos
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-4">
              <span className="text-gray-900 dark:text-gray-100">Cecilia</span>
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                García Arellano
              </span>
            </h1>

            {/* Animated role with typewriter effect */}
            <div className="h-12 mb-6 flex items-center">
              <p className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-sky-500 ml-1 animate-pulse"></span>
              </p>
            </div>

            {/* Value proposition */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Transformo ideas en experiencias digitales excepcionales. 
              Especializada en desarrollo web moderno con enfoque en diseño intuitivo y código limpio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 font-semibold rounded-lg border-2 border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Contactar</span>
              </a>
            </div>

            {/* Stats or tech stack (optional) */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div>
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">2+</span>
                <span>Años de experiencia</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">10+</span>
                <span>Proyectos completados</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">100%</span>
                <span>Clientes satisfechos</span>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-sky-400/20 dark:bg-sky-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-cyan-400/20 dark:bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              
              <div className="relative bg-gradient-to-br from-sky-500 to-cyan-400 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-8 h-full">
                  {/* Logo image from public/images */}
                  <div className="aspect-square rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700">
                    <img
                      src="/images/logo.png"
                      alt="Cecilia García logo"
                      className="max-w-full max-h-full object-contain rounded-xl"
                    />
                  </div>

                  {/* Floating tech badges */}
                  <div className="absolute -right-4 top-1/4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">React</span>
                  </div>
                  <div className="absolute -left-4 top-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tailwind</span>
                  </div>
                  <div className="absolute -right-4 bottom-1/4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Python</span>
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

export default Hero;
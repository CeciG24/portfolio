import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/CeciG24',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'www.linkedin.com/in/cecilia-garcia-arellano-2ba84135a',
      color: 'hover:text-sky-500 dark:hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ceciliaga604@gmail.com',
      color: 'hover:text-cyan-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Cecilia García
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Desarrolladora Full Stack apasionada por crear experiencias web increíbles.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-200 mb-4">
              Conecta conmigo
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            © {year} Cecilia García Arellano. Hecho con
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            y React
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition-all duration-200"
            aria-label="Volver arriba"
          >
            <span className="text-sm font-medium">Volver arriba</span>
            <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Wave decoration (optional) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            className="text-sky-500"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
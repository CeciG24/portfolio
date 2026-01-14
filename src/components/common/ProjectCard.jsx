import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className={`group relative bg-white dark:bg-slate-800 border ${
      project.highlight 
        ? 'border-sky-500 dark:border-sky-500 ring-2 ring-sky-500/20' 
        : 'border-gray-200 dark:border-slate-700'
    } rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300`}>
      
      {/* Highlight badge */}
      {project.highlight && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-sky-500 text-white text-xs font-semibold rounded-full flex items-center space-x-1 shadow-lg">
          <Star className="w-3 h-3 fill-current" />
          <span>Destacado</span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and role */}
        <div className="mb-3">
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {project.role}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-slate-900 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>Código</span>
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-cyan-400 hover:shadow-lg rounded-lg transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}

          {!project.demo && !project.github && (
            <span className="text-xs text-gray-400 dark:text-gray-500 italic">
              Próximamente
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
import { projects } from '../data/projects';
import { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import ProjectCard from '../components/common/ProjectCard';
// Projects Section Component
const Projects = () => {
  // Mock data - reemplazar con: import { projects } from '../data/projects';
  const projectsData = projects;

  const [filter, setFilter] = useState('all');

  // Get unique roles for filters
  const roles = ['all', ...new Set(projectsData.map(p => p.role))];

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.role === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-gray-100">
            Proyectos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Una selección de proyectos en los que he trabajado, desde aplicaciones web completas hasta 
            demos funcionales. Cada uno refleja mi evolución como desarrolladora.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filtrar por:</span>
          </div>
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === role
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {role === 'all' ? 'Todos' : role}
            </button>
          ))}
        </div>

        {/* Projects count */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Mostrando {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
        </p>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No hay proyectos con este filtro.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ¿Tienes un proyecto en mente?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <span>Trabajemos juntos</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
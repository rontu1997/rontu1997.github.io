import { currentProjects } from '../data/currentProjects';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GitHubRepositoryLinks } from '../components/GitHubRepositoryLinks';

const orderedProjects = currentProjects;

const ProjectsPage = () => {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            Projects across Agentic AI, cloud scientific computing, and polymer modelling frameworks.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderedProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover-card"
            >
              <Link
                to={`/projects/${project.slug}`}
                aria-label={`View ${project.title}`}
                className="relative block h-52 overflow-hidden focus-visible:outline-2 focus-visible:outline-electric-blue focus-visible:outline-offset-[-2px]"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <div className="p-6">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="rounded focus-visible:outline-2 focus-visible:outline-electric-blue focus-visible:outline-offset-4"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-electric-blue hover:text-white transition-colors duration-300"
                >
                  View Project
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
                <div className="mt-5 border-t border-white/5 pt-4">
                  <p className="mb-2 text-xs text-text-secondary">GitHub repositories</p>
                  <GitHubRepositoryLinks repositories={project.repositories} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

import { currentProjects } from '../data/currentProjects';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GitHubRepositoryLinks } from './GitHubRepositoryLinks';

const orderedProjects = currentProjects.map((project) => ({ ...project, title: project.homeTitle }));

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            Selected work across Agentic AI, cloud scientific computing, and polymer modelling frameworks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {orderedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover-card"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {project.title}
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
        <div className="text-center mt-8"><Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-electric-blue hover:text-white">View All Projects <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  );
};

export default Projects;

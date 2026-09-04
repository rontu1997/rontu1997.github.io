import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    slug: 'biomedical-healthcare-materials',
    image: './images/Image2.png',
    title: 'Biomedical & Healthcare Materials',
    description:
      'AI-assisted molecular simulation of hydrogels for drug delivery, tissue engineering, wound healing, and biomedical applications.',
  },
  {
    slug: 'sustainable-energy-materials',
    image: './images/Image3.png',
    title: 'Sustainable Energy Materials',
    description:
      'Molecular design of eutectogels and electrolyte materials for next-generation lithium-ion batteries.',
  },
  {
    slug: 'environmental-engineering',
    image: './images/Image4.png',
    title: 'Environmental Engineering',
    description:
      'Simulation-driven development of sustainable materials for pollutant adsorption and wastewater treatment.',
  },
  {
    slug: 'extraction-separation-processes',
    image: './images/Image5.png',
    title: 'Extraction & Separation Processes',
    description:
      'Molecular-level solvent screening and extraction optimization for high-value bioactive compounds.',
  },
  {
    slug: 'food-nutraceutical-engineering',
    image: './images/Image6.png',
    title: 'Food & Nutraceutical Engineering',
    description:
      'Computational investigation of food systems, nutraceutical compounds, and bioactive ingredient interactions.',
  },
  {
    slug: 'ai-for-materials-science',
    image: './images/Image7.png',
    title: 'AI for Materials Science',
    description:
      'Machine learning and molecular simulation integration for predictive materials discovery.',
  },
];

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
            Research <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            Exploring molecular simulations, artificial intelligence, and advanced materials design across multiple research domains.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover-card"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

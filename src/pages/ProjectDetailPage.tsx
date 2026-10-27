import { currentProjects } from '../data/currentProjects';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AgenticAICaseStudy, PolymerCaseStudy } from '../components/ProjectCaseStudies';
import { CloudContainersCaseStudy } from '../components/CloudContainersCaseStudy';
import { GitHubRepositoryLinks } from '../components/GitHubRepositoryLinks';

interface ProjectData {
  title: string;
  homeTitle?: string;
  image: string;
  imageAlt?: string;
  overview: string;
  motivation: string;
  methodology: string[];
  keyFindings: string[];
  publications: string[];
  gallery: string[];
  repositories: { label: string; url: string }[];
}

const projectsData: Record<string, ProjectData> = {
  ...Object.fromEntries(currentProjects.map((project) => [project.slug, project])),
};

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-electric-blue to-deep-blue text-white font-medium text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const caseStudy = slug === 'polymer-framework-builder'
    ? <PolymerCaseStudy />
    : slug === 'agentic-ai-scientific-rd'
      ? <AgenticAICaseStudy />
      : slug === 'cloud-scientific-tool-containers'
        ? <CloudContainersCaseStudy />
      : null;

  return (
    <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden mb-6 border border-white/5"
        >
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            className="block w-full h-auto"
          />
          {slug === 'polymer-framework-builder' && (
            <figcaption className="bg-[#0a0a0f] px-5 py-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
              Concept image. The current application builds linear homopolymers and merges two PDB structures; the pictured monomer library, copolymer, crosslinking, and modification modes are not implemented.
            </figcaption>
          )}
        </motion.figure>

        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-10">
          {project.title}
        </h1>

        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">GitHub repositories</p>
          <GitHubRepositoryLinks repositories={project.repositories} />
        </div>

        {caseStudy ?? (
          <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-xl sm:text-2xl font-semibold gradient-text">Coming Soon</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailPage;

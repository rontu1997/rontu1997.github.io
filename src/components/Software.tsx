import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Code2, Database, Server } from 'lucide-react';

const software = [
  {
    icon: Terminal,
    title: 'GROMACS Workflows',
    desc: 'Custom automation scripts and analysis pipelines for large-scale molecular dynamics simulations using GROMACS.',
    tags: ['GROMACS', 'Bash', 'Python'],
  },
  {
    icon: Code2,
    title: 'ML-MD Integration',
    desc: 'Machine learning frameworks integrated with molecular dynamics for property prediction and feature extraction.',
    tags: ['PyTorch', 'scikit-learn', 'MDAnalysis'],
  },
  {
    icon: Database,
    title: 'Materials Database',
    desc: 'Curated datasets and analysis tools for molecular simulation results across multiple material systems.',
    tags: ['Python', 'Pandas', 'SQL'],
  },
  {
    icon: Server,
    title: 'HPC Job Manager',
    desc: 'High-Performance Computing job submission and monitoring tools for massively parallel simulation campaigns.',
    tags: ['SLURM', 'Linux', 'Shell'],
  },
];

const Software = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="software" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Software & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Open-source tools and computational workflows developed for
            molecular simulation research
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {software.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card rounded-2xl p-6 hover-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center shrink-0 group-hover:from-electric-blue/20 group-hover:to-purple/20 transition-all">
                    <Icon size={18} className="text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-electric-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-text-secondary font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Software;

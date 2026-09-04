import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, Cpu, Zap, Leaf, Beaker, Dna } from 'lucide-react';

const domains = [
  {
    icon: Dna,
    title: 'Biomedical Materials',
    desc: 'Hydrogels, drug delivery systems, tissue engineering, and wound healing materials through molecular simulations.',
    color: 'text-electric-blue',
    bg: 'from-electric-blue/10 to-electric-blue/5',
  },
  {
    icon: Zap,
    title: 'Energy Storage',
    desc: 'Eutectogels, electrolyte materials, and lithium-ion battery components designed at the molecular level.',
    color: 'text-yellow-400',
    bg: 'from-yellow-400/10 to-yellow-400/5',
  },
  {
    icon: Leaf,
    title: 'Environmental Engineering',
    desc: 'Sustainable materials for pollutant adsorption, wastewater treatment, and environmental remediation.',
    color: 'text-green-400',
    bg: 'from-green-400/10 to-green-400/5',
  },
  {
    icon: FlaskConical,
    title: 'Separation Processes',
    desc: 'Solvent extraction and separation systems for efficient recovery of high-value compounds.',
    color: 'text-purple',
    bg: 'from-purple/10 to-purple/5',
  },
  {
    icon: Beaker,
    title: 'Food Engineering',
    desc: 'Computational investigation of food systems, bioactive compounds, and nutraceutical formulations.',
    color: 'text-magenta',
    bg: 'from-magenta/10 to-magenta/5',
  },
  {
    icon: Cpu,
    title: 'AI for Science',
    desc: 'Machine learning, reservoir computing, and molecular simulations for predictive materials discovery.',
    color: 'text-deep-blue',
    bg: 'from-deep-blue/10 to-deep-blue/5',
  },
];

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Research <span className="gradient-text">Domains</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            My research spans six interconnected domains, unified by
            computational approaches and AI-driven methodology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass-card rounded-2xl p-6 hover-card"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${domain.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} className={domain.color} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {domain.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {domain.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Research;

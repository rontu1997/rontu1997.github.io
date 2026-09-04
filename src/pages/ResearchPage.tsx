import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Zap, Leaf, Beaker, Dna } from 'lucide-react';

const domains = [
  {
    icon: Dna,
    title: 'Biomedical & Healthcare Materials',
    color: 'text-electric-blue',
    bg: 'from-electric-blue/10 to-electric-blue/5',
    description: 'AI-assisted molecular simulation of hydrogels for drug delivery, tissue engineering, wound healing, and biomedical applications.',
    details: [
      'Thiol-ene click-crosslinked carboxymethyl cellulose hydrogels',
      'Norbornene-functionalized PVA hydrogels for drug delivery',
      '4-arm PEG hydrogel ciprofloxacin drug carriers',
      'Molecular-level understanding of crosslinking mechanisms',
      'Transport property prediction using reservoir computing',
    ],
  },
  {
    icon: Zap,
    title: 'Sustainable Energy Materials',
    color: 'text-yellow-400',
    bg: 'from-yellow-400/10 to-yellow-400/5',
    description: 'Molecular design of eutectogels and electrolyte materials for next-generation lithium-ion batteries and energy storage systems.',
    details: [
      'Lignin-infused PVA eutectogels for Li-ion transportation',
      'LiTFSI organic & inorganic matrix eutectogels',
      'Cellulose-based eutectogel molecular dynamics',
      'Ion transport mechanism understanding at molecular level',
      'Next-generation battery electrolyte design',
    ],
  },
  {
    icon: Leaf,
    title: 'Environmental Engineering',
    color: 'text-green-400',
    bg: 'from-green-400/10 to-green-400/5',
    description: 'Simulation-driven development of sustainable materials for pollutant adsorption, wastewater treatment, and environmental remediation.',
    details: [
      'Methylene Blue dye adsorption on hydrogel surfaces',
      'Thiol-norbornene crosslinked PVA for wastewater treatment',
      'Pollutant-material interaction molecular dynamics',
      'Sustainable adsorbent material design',
      'Environmental remediation through computational approaches',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Extraction & Separation Processes',
    color: 'text-purple',
    bg: 'from-purple/10 to-purple/5',
    description: 'Molecular-level solvent screening and extraction optimization for high-value bioactive compounds using computational approaches.',
    details: [
      'Solvent optimization for caffeine & tannic acid extraction',
      '2-Methyl THF, deep eutectic solvents, and microemulsion systems',
      'Lutein solvation in green solvents',
      'Anacardic acid structural dynamics in different solvents',
      'Guarana seed bioactive compound extraction',
    ],
  },
  {
    icon: Beaker,
    title: 'Food & Nutraceutical Engineering',
    color: 'text-magenta',
    bg: 'from-magenta/10 to-magenta/5',
    description: 'Computational investigation of food systems, nutraceutical compounds, and bioactive ingredient interactions at the molecular level.',
    details: [
      'Lutein-gelatin-starch supramolecular chemistry in GI buffers',
      'Chocolate molecular dynamics: caffeine, fatty acids & sugars',
      'Nutraceutical encapsulation and delivery systems',
      'Bioactive compound stability in food matrices',
      'Simulated gastro-intestinal environment modeling',
    ],
  },
  {
    icon: Cpu,
    title: 'AI for Materials Science',
    color: 'text-deep-blue',
    bg: 'from-deep-blue/10 to-deep-blue/5',
    description: 'Machine learning and molecular simulation integration for predictive materials discovery and property prediction.',
    details: [
      'Reservoir computing for hydrogel property prediction',
      'Deep learning for molecular property estimation',
      'AI-MD integration frameworks for materials discovery',
      'Scientific AI and generative models for molecular design',
      'Data-driven computational materials informatics',
    ],
  },
];

const ResearchPage = () => {
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
            Research <span className="gradient-text">Domains</span>
          </h1>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            My research spans six interconnected domains, unified by computational approaches, molecular simulations, and AI-driven methodology.
          </p>
        </motion.div>

        {/* Domain Cards */}
        <div className="space-y-8">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 hover-card"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.bg} flex items-center justify-center mb-4`}
                    >
                      <Icon size={22} className={domain.color} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{domain.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-semibold text-white/80 mb-3">Key Research Areas</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {domain.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${domain.bg} shrink-0 mt-1.5`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
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

export default ResearchPage;

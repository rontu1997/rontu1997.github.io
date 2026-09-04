import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { BookOpen, ExternalLink, Filter } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
}

const publications: Publication[] = [
  {
    title: 'Bridging Atomistic Simulations and Reservoir Computing for Predicting Structural and Transport Properties of Thiol–Ene Click-Cross-Linked Carboxymethyl Cellulose Hydrogels',
    authors: 'Rontu Das, Debashis Kundu',
    journal: 'The Journal of Physical Chemistry B, 130(11), 3167-3186',
    year: 2026,
    doi: '10.1021/acs.jpcb.5c08098',
  },
  {
    title: 'Understanding the Molecular Level Interaction of Lithium-ions with Cellulose Based Eutectogel: A Molecular Dynamics Study',
    authors: 'Rontu Das, Debashis Kundu',
    journal: 'Advanced Theory and Simulations',
    year: 2026,
    doi: '10.1002/adts.202501934',
  },
  {
    title: 'Molecular dynamics simulation of thiol-ene \'click\' copolymerized and blended carboxymethyl cellulose and 4-arm polyethylene glycol hydrogel used as ciprofloxacin drug carrier',
    authors: 'Rontu Das, Debashis Kundu',
    journal: 'Chemical Engineering Science, 324, 123356',
    year: 2026,
    doi: '10.1016/j.ces.2026.123356',
  },
  {
    title: 'Optimizing Solvent Systems for Effective Lutein Solvation: A Molecular Dynamics Approach Using 2-Methyl Tetrahydrofuran, Deep Eutectic Solvent, Microemulsion, and Hexane',
    authors: 'Ayush S. Gulhane, Rontu Das, Navnath T. Hatvate, Debashis Kundu',
    journal: 'Macromolecular Theory and Simulations',
    year: 2025,
    doi: '10.1002/mats.202500016',
  },
  {
    title: 'Adsorption of Methylene Blue Dye in the Thiol-Norbornene Crosslinked Polyvinyl Alcohol Hydrogel Surface: A Molecular Dynamics Study',
    authors: 'Rontu Das, Debashis Kundu',
    journal: 'Environmental Science and Pollution Research',
    year: 2025,
    doi: '10.1007/s11356-025-36309-3',
  },
  {
    title: 'Structure and Dynamics of Anacardic Acid in Hexane, Ethanol and Carbon Tetrachloride: A Molecular Dynamics Investigation',
    authors: 'Ritesh K. Patil, Rontu Das, Debashis Kundu',
    journal: 'Journal of Molecular Modelling, 31, 107',
    year: 2025,
    doi: '10.1007/s00894-025-06320-z',
  },
  {
    title: 'Unveiling Molecular Interactions in Chocolate by Molecular Dynamics: A Study on Caffeine, Fatty Acids and Sugars',
    authors: 'Abhinav Tidke, Rontu Das, Debashis Kundu',
    journal: 'Journal of Chemical & Engineering Data',
    year: 2025,
    doi: '10.1021/acs.jced.4c00665',
  },
  {
    title: 'Enlightenment the Dynamic Behavior of Norbornene–Modified \'Click\' 4–arm Polyethylene Glycol Hydrogel: Delving into Framework Properties and Transport Properties through Molecular Dynamics Simulations',
    authors: 'Rontu Das, Debashis Kundu',
    journal: 'Computational Materials Science, 247, 113516',
    year: 2025,
    doi: '10.1016/j.commatsci.2024.113516',
  },
  {
    title: 'Understanding the Supramolecular Chemistry of Lutein with Gelatin, Octenyl Succinic Anhydride-Modified Starch Polymers in Simulated Gastro-Intestinal Buffers: A Molecular Dynamics Study',
    authors: 'Rontu Das, Debashis Kundu',
    journal: 'Macromolecular Chemistry and Physics, 2400295',
    year: 2024,
    doi: '10.1002/macp.202400295',
  },
  {
    title: 'Solvent Optimization for Caffeine and Tannic Acid Extraction from Guarana Seed: Insights from Molecular Dynamics Simulations',
    authors: 'Abhinav Tidke, Rontu Das, Uday S. Annapure, Debashis Kundu',
    journal: 'Journal of Molecular Liquids, 416, 126462',
    year: 2024,
    doi: '10.1016/j.molliq.2024.126462',
  },
  {
    title: 'Lithium Ion Transportation in Lignin Infused Polyvinyl Alcohol Based Eutectogel: A Molecular Dynamics Framework',
    authors: 'Aradhana V. Thombre, Rontu Das, Debashis Kundu',
    journal: 'Journal of Energy Storage, 102, 114060',
    year: 2024,
    doi: '10.1016/j.est.2024.114060',
  },
  {
    title: 'Unraveling the underlying structural & transport mechanism of lithium-ion within Lithium bis(trifluoromethanesulfonyl)imide subjected to organic & inorganic matrix based Eutectogel',
    authors: 'Shreyash P. Deshmukh, Rontu Das, Debashis Kundu',
    journal: 'Journal of Power Sources, 600, 234270',
    year: 2024,
    doi: '10.1016/j.jpowsour.2024.234270',
  },
  {
    title: 'Structural and Transport Properties of Norbornene-Functionalized Poly(vinyl alcohol) "Click" Hydrogel: A Molecular Dynamics Study',
    authors: 'Rontu Das, Debashis Kundu',
    journal: 'ACS Sustainable Chemistry & Engineering, 11(29), 10812–10824',
    year: 2023,
    doi: '10.1021/acssuschemeng.3c01948',
  },
];

const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

function AnimatedCounter({ value, start }: { value: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, value]);

  return <span>{count}+</span>;
}

const PublicationsPage = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const ref = useRef(null);

  const filtered = selectedYear
    ? publications.filter((p) => p.year === selectedYear)
    : publications;

  return (
    <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Publications</span>
          </h1>
          <p className="text-text-secondary text-sm max-w-lg mx-auto mb-8">
            Peer-reviewed publications in high-impact SCI journals spanning computational chemistry, molecular dynamics, and AI for materials science.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                <AnimatedCounter value={13} start={true} />
              </div>
              <div className="text-text-secondary text-xs">SCI Publications</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                <AnimatedCounter value={80} start={true} />
              </div>
              <div className="text-text-secondary text-xs">Citations</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                <AnimatedCounter value={4} start={true} />
              </div>
              <div className="text-text-secondary text-xs">Years</div>
            </div>
          </div>
        </motion.div>

        {/* Year Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          <Filter size={14} className="text-text-secondary" />
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
              selectedYear === null
                ? 'bg-gradient-to-r from-electric-blue to-deep-blue text-white'
                : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'
            }`}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-gradient-to-r from-electric-blue to-deep-blue text-white'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'
              }`}
            >
              {year}
            </button>
          ))}
        </motion.div>

        {/* Publications List */}
        <div className="space-y-4">
          {filtered.map((pub, i) => (
            <motion.div
              key={pub.doi}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="glass-card rounded-2xl p-5 sm:p-6 hover-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center shrink-0">
                  <BookOpen size={16} className="text-electric-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white mb-1 leading-relaxed">
                    {pub.title}
                  </h3>
                  <p className="text-text-secondary text-xs mb-1">{pub.authors}</p>
                  <p className="text-electric-blue text-xs font-medium mb-2">
                    {pub.journal} ({pub.year})
                  </p>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-electric-blue transition-colors"
                  >
                    <ExternalLink size={12} />
                    DOI: {pub.doi}
                  </a>
                </div>
                <span className="text-xs font-mono text-text-secondary/60 shrink-0">
                  {pub.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;

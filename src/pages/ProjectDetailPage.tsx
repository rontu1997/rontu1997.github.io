import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FlaskConical, Target, Cpu, BookOpen, Image as ImageIcon, Lightbulb } from 'lucide-react';

interface ProjectData {
  title: string;
  image: string;
  overview: string;
  motivation: string;
  methodology: string[];
  keyFindings: string[];
  publications: string[];
  gallery: string[];
}

const projectsData: Record<string, ProjectData> = {
  'biomedical-healthcare-materials': {
    title: 'Biomedical & Healthcare Materials',
    image: './images/Image2.png',
    overview:
      'This research domain focuses on AI-assisted molecular simulation of hydrogels for drug delivery, tissue engineering, wound healing, and biomedical applications. Through advanced molecular dynamics simulations, we investigate the structural and transport properties of crosslinked hydrogel networks to design next-generation biomaterials.',
    motivation:
      'Hydrogels are critical materials in biomedical applications, but their design often relies on costly trial-and-error experimentation. By leveraging molecular dynamics simulations integrated with AI and machine learning, we can predict material properties computationally, significantly accelerating the design cycle and reducing experimental costs.',
    methodology: [
      'All-atom Molecular Dynamics simulations using GROMACS',
      'Thiol-ene click chemistry crosslinking simulations',
      'Radial Distribution Function (RDF) analysis',
      'Mean Square Displacement (MSD) for diffusion coefficients',
      'Reservoir Computing for property prediction',
      'Free energy perturbation calculations',
    ],
    keyFindings: [
      'Predicted structural properties of thiol-ene click-crosslinked CMC hydrogels using reservoir computing',
      'Characterized transport properties of norbornene-functionalized PVA hydrogels',
      'Simulated ciprofloxacin drug delivery through 4-arm PEG hydrogel carriers',
      'Identified optimal crosslinking density for enhanced drug loading capacity',
    ],
    publications: [
      'Rontu Das, Debashis Kundu. Bridging Atomistic Simulations and Reservoir Computing... J. Phys. Chem. B (2026)',
      'Rontu Das, Debashis Kundu. Molecular dynamics simulation of thiol-ene... Chem. Eng. Sci. (2026)',
      'Rontu Das, Debashis Kundu. Enlightenment the Dynamic Behavior of Norbornene–Modified Click PEG Hydrogel... Comput. Mater. Sci. (2025)',
      'Rontu Das, Debashis Kundu. Structural and Transport Properties of Norbornene-Functionalized PVA... ACS Sustainable Chem. Eng. (2023)',
    ],
    gallery: ['./images/Image2.png'],
  },
  'sustainable-energy-materials': {
    title: 'Sustainable Energy Materials',
    image: './images/Image3.png',
    overview:
      'This project investigates the molecular design of eutectogels and electrolyte materials for next-generation lithium-ion batteries. Through molecular dynamics simulations, we study ion transport mechanisms and material interactions at the atomic level to enable the design of safer, more efficient energy storage systems.',
    motivation:
      'The transition to renewable energy demands better energy storage solutions. Eutectogels represent a promising class of quasi-solid electrolytes that combine the high ionic conductivity of liquids with the safety of solids. Understanding their molecular-level behavior is key to optimizing their performance.',
    methodology: [
      'Molecular Dynamics simulations of eutectogel systems',
      'Lithium-ion transport mechanism analysis',
      'Ionic conductivity calculations',
      'Polymer-ion interaction characterization',
      'Activation energy determination',
      'Self-diffusion coefficient measurements',
    ],
    keyFindings: [
      'Elucidated lithium-ion transport mechanism in cellulose-based eutectogels',
      'Characterized lignin-infused PVA eutectogel ion conduction pathways',
      'Unraveled structural & transport mechanisms of LiTFSI in organic & inorganic eutectogels',
      'Identified key molecular-level factors governing ionic conductivity',
    ],
    publications: [
      'Rontu Das, Debashis Kundu. Understanding the Molecular Level Interaction of Lithium-ions with Cellulose Based Eutectogel... Adv. Theory Simul. (2026)',
      'Aradhana V. Thombre, Rontu Das, Debashis Kundu. Lithium Ion Transportation in Lignin Infused PVA Based Eutectogel... J. Energy Storage (2024)',
      'Shreyash P. Deshmukh, Rontu Das, Debashis Kundu. Unraveling the structural & transport mechanism of lithium-ion... J. Power Sources (2024)',
    ],
    gallery: ['./images/Image3.png'],
  },
  'environmental-engineering': {
    title: 'Environmental Engineering',
    image: './images/Image4.png',
    overview:
      'Simulation-driven development of sustainable materials for pollutant adsorption, wastewater treatment, and environmental remediation. This research uses molecular dynamics to understand pollutant-material interactions and design efficient adsorbent materials.',
    motivation:
      'Water pollution remains one of the most pressing global challenges. Developing efficient, sustainable adsorbent materials requires fundamental understanding of pollutant-material interactions at the molecular level. MD simulations provide atomic-scale insights that guide rational material design.',
    methodology: [
      'Molecular Dynamics simulations of dye-hydrogel systems',
      'Adsorption free energy calculations',
      'Surface interaction analysis',
      'Hydrogen bonding network characterization',
      'Diffusion and transport modeling',
      'Binding site identification and optimization',
    ],
    keyFindings: [
      'Characterized methylene blue dye adsorption mechanism on thiol-norbornene crosslinked PVA hydrogel surfaces',
      'Identified key binding sites and interaction energies for pollutant-material systems',
      'Demonstrated the role of crosslinking density in adsorption capacity',
      'Provided computational guidelines for sustainable adsorbent design',
    ],
    publications: [
      'Rontu Das, Debashis Kundu. Adsorption of Methylene Blue Dye in the Thiol-Norbornene Crosslinked PVA Hydrogel Surface... Environ. Sci. Pollut. Res. (2025)',
    ],
    gallery: ['./images/Image4.png'],
  },
  'extraction-separation-processes': {
    title: 'Extraction & Separation Processes',
    image: './images/Image5.png',
    overview:
      'This research focuses on molecular-level solvent screening and extraction optimization for high-value bioactive compounds. Using molecular dynamics simulations, we investigate solvent-solute interactions to identify optimal extraction conditions and green solvent alternatives.',
    motivation:
      'Efficient extraction of bioactive compounds from natural sources is critical for pharmaceutical, food, and nutraceutical industries. Computational solvent screening can dramatically reduce the experimental search space, enabling faster identification of green and efficient solvent systems.',
    methodology: [
      'Solvent-solute interaction MD simulations',
      'Radial distribution function analysis',
      'Solvation free energy calculations',
      'Green solvent screening protocols',
      'Deep eutectic solvent characterization',
      'Microemulsion system modeling',
    ],
    keyFindings: [
      'Optimized solvent systems for lutein solvation using 2-Methyl THF, DES, and microemulsion',
      'Characterized caffeine and tannic acid extraction from guarana seed in multiple solvents',
      'Elucidated anacardic acid structural dynamics in hexane, ethanol, and CCl4',
      'Identified green solvent alternatives for bioactive compound extraction',
    ],
    publications: [
      'Ayush S. Gulhane, Rontu Das, et al. Optimizing Solvent Systems for Effective Lutein Solvation... Macromol. Theory Simul. (2025)',
      'Ritesh K. Patil, Rontu Das, Debashis Kundu. Structure and Dynamics of Anacardic Acid... J. Mol. Model. (2025)',
      'Abhinav Tidke, Rontu Das, et al. Solvent Optimization for Caffeine and Tannic Acid Extraction... J. Mol. Liq. (2024)',
    ],
    gallery: ['./images/Image5.png'],
  },
  'food-nutraceutical-engineering': {
    title: 'Food & Nutraceutical Engineering',
    image: './images/Image6.png',
    overview:
      'Computational investigation of food systems, nutraceutical compounds, and bioactive ingredient interactions at the molecular level. This research provides atomistic insights into food component interactions for improved formulation design.',
    motivation:
      'Understanding molecular interactions in food systems is essential for developing stable formulations and effective delivery systems for bioactive ingredients. MD simulations offer unique insights into food matrix dynamics that are difficult to obtain experimentally.',
    methodology: [
      'Supramolecular chemistry simulations',
      'Simulated gastro-intestinal buffer modeling',
      'Polymer-bioactive interaction analysis',
      'Encapsulation efficiency modeling',
      'Molecular-level food matrix characterization',
      'Stability and release profile predictions',
    ],
    keyFindings: [
      'Characterized lutein-gelatin-starch supramolecular interactions in GI buffers',
      'Unveiled molecular interactions in chocolate: caffeine, fatty acids, and sugars',
      'Provided molecular-level understanding of nutraceutical encapsulation mechanisms',
      'Identified key factors governing bioactive compound stability in food matrices',
    ],
    publications: [
      'Rontu Das, Debashis Kundu. Understanding the Supramolecular Chemistry of Lutein... Macromol. Chem. Phys. (2024)',
      'Abhinav Tidke, Rontu Das, et al. Unveiling Molecular Interactions in Chocolate... J. Chem. Eng. Data (2025)',
    ],
    gallery: ['./images/Image6.png'],
  },
  'ai-for-materials-science': {
    title: 'AI for Materials Science',
    image: './images/Image7.png',
    overview:
      'Integration of machine learning, reservoir computing, and molecular simulations for predictive materials discovery. This research develops AI frameworks that bridge atomistic simulations and data-driven modeling for accelerated materials design.',
    motivation:
      'Traditional molecular simulations are computationally expensive for exploring vast materials design spaces. By integrating AI and ML with MD simulations, we can build surrogate models that predict material properties orders of magnitude faster, enabling high-throughput computational screening.',
    methodology: [
      'Reservoir Computing for time-series prediction',
      'Deep Learning for property estimation',
      'Feature extraction from MD trajectories',
      'Machine Learning model training and validation',
      'AI-MD integration pipeline development',
      'Materials informatics database curation',
    ],
    keyFindings: [
      'Successfully applied reservoir computing to predict structural and transport properties of hydrogels',
      'Developed AI-MD integration frameworks for materials property prediction',
      'Demonstrated ML-accelerated screening of molecular simulation parameters',
      'Created transferable computational frameworks applicable across material systems',
    ],
    publications: [
      'Rontu Das, Debashis Kundu. Bridging Atomistic Simulations and Reservoir Computing... J. Phys. Chem. B (2026)',
    ],
    gallery: ['./images/Image7.png'],
  },
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

  const sections = [
    { icon: Target, title: 'Overview', content: project.overview },
    { icon: Lightbulb, title: 'Motivation', content: project.motivation },
  ];

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden mb-10 border border-white/5"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-white">{project.title}</h1>
          </div>
        </motion.div>

        {/* Overview & Motivation */}
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 hover-card mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center">
                  <Icon size={18} className="text-electric-blue" />
                </div>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{section.content}</p>
            </motion.div>
          );
        })}

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-6 sm:p-8 hover-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center">
              <Cpu size={18} className="text-electric-blue" />
            </div>
            <h2 className="text-lg font-semibold text-white">Methodology</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {project.methodology.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric-blue to-purple shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 hover-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center">
              <FlaskConical size={18} className="text-electric-blue" />
            </div>
            <h2 className="text-lg font-semibold text-white">Key Findings</h2>
          </div>
          <ul className="space-y-3">
            {project.keyFindings.map((finding) => (
              <li key={finding} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric-blue to-purple shrink-0 mt-1.5" />
                {finding}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-8 hover-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center">
              <BookOpen size={18} className="text-electric-blue" />
            </div>
            <h2 className="text-lg font-semibold text-white">Related Publications</h2>
          </div>
          <ul className="space-y-3">
            {project.publications.map((pub) => (
              <li key={pub} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric-blue to-purple shrink-0 mt-1.5" />
                {pub}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card rounded-2xl p-6 sm:p-8 hover-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center">
                <ImageIcon size={18} className="text-electric-blue" />
              </div>
              <h2 className="text-lg font-semibold text-white">Gallery</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/5">
                  <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailPage;

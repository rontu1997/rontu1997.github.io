import { softwareAreas } from '../data/positioning';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Server } from 'lucide-react';

const software = [
  {
    icon: Terminal,
    title: 'GROMACS Workflows',
    desc: 'Custom automation scripts and analysis pipelines for large-scale molecular dynamics simulations using GROMACS. Includes topology generation, energy minimization, equilibration, and production run automation with comprehensive post-processing tools.',
    tags: ['GROMACS', 'Bash', 'Python', 'VMD'],
    features: [
      'Automated topology generation and system setup',
      'Multi-stage equilibration protocols (NVT/NPT)',
      'Production run management for long-timescale simulations',
      'Post-processing: RDF, MSD, density profiles, hydrogen bonds',
      'Visualization pipeline integration with VMD/PyMOL',
    ],
  },
  {
    icon: Code2,
    title: 'AI-MD Integration Framework',
    desc: 'Machine learning frameworks integrated with molecular dynamics for property prediction and feature extraction. Combines reservoir computing, deep learning, and traditional MD analysis for accelerated materials discovery.',
    tags: ['PyTorch', 'scikit-learn', 'MDAnalysis', 'TensorFlow'],
    features: [
      'Reservoir computing for structural property prediction',
      'Deep learning models for transport property estimation',
      'Feature extraction from MD trajectories',
      'Automated ML model training and validation pipelines',
      'Transfer learning across material systems',
    ],
  },
  {
    icon: Database,
    title: 'Materials Database',
    desc: 'Curated datasets and analysis tools for molecular simulation results across multiple material systems. Includes structured databases of hydrogels, eutectogels, and extraction systems with searchable metadata.',
    tags: ['Python', 'Pandas', 'SQL', 'Jupyter'],
    features: [
      'Structured simulation result storage and retrieval',
      'Cross-system property comparison tools',
      'Automated data extraction from simulation outputs',
      'Statistical analysis and visualization modules',
      'Exportable datasets for ML model training',
    ],
  },
  {
    icon: Server,
    title: 'HPC Job Manager',
    desc: 'High-Performance Computing job submission and monitoring tools for massively parallel simulation campaigns. Supports SLURM-based HPC clusters with automated job chaining and resource optimization.',
    tags: ['SLURM', 'Linux', 'Shell', 'Python'],
    features: [
      'SLURM job script generation and submission',
      'Automated job chaining for multi-stage simulations',
      'Resource utilization monitoring and optimization',
      'Failure detection and automatic restart protocols',
      'Batch simulation campaign management',
    ],
  },
  {
    icon: Code2,
    title: "Scientific R&D Agent Framework",
    desc: "AI-agent framework for industrial R&D workflows developed across Microsoft Discovery and Microsoft Foundry. The framework extends scientific agents with web search, memory, performance optimization, guardrails, and access to computational tools.",
    tags: [
  "Microsoft Discovery",
  "Microsoft Foundry",
  "AI Agents",
  "Web Search",
  "Memory",
  "Guardrails"
],
    features: [
  "Scientific agent development for industrial R&D workflows",
  "Web-search integration",
  "Agent memory for contextual continuity",
  "Agent instruction and workflow optimization",
  "Tool-access orchestration",
  "Guardrails for controlled and reliable operation"
],
  },
  {
    icon: Server,
    title: "Cloud Scientific Tool Containers",
    desc: "Docker-based packaging and cloud deployment of open-source scientific applications for agent-accessible computational workflows in Microsoft Discovery.",
    tags: [
  "Docker",
  "Microsoft Azure",
  "Azure Container Registry",
  "GROMACS",
  "LAMMPS",
  "Quantum ESPRESSO",
  "OpenFOAM"
],
    features: [
  "Containerization of scientific simulation software",
  "Deployment through Microsoft Azure Container Registry",
  "Cloud-ready interfaces for agent tool access",
  "Reusable computational environments",
  "Support for multi-step simulation and analysis workflows"
],
  },
  {
    icon: Terminal,
    title: "MCP Servers for Scientific Applications",
    desc: "Model Context Protocol servers that expose local scientific applications to AI agents for tool invocation, computational execution, and downstream analysis.",
    tags: [
  "MCP",
  "AI Agents",
  "Scientific Computing",
  "GROMACS",
  "LAMMPS",
  "Quantum ESPRESSO",
  "OpenFOAM"
],
    features: [
  "MCP server development for scientific applications",
  "Standardized agent-to-tool communication",
  "Local-PC integration with Microsoft Discovery",
  "Agent-driven tool selection and execution",
  "Scientific workflow orchestration",
  "Integration of simulation outputs with downstream analysis"
],
  },
];

const SoftwarePage = () => {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Scientific AI &amp; <span className="gradient-text">Computational Tools</span>
          </h1>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            I develop and integrate computational tools that connect Artificial Intelligence with scientific software. My work includes AI-agent tool interfaces, MCP servers, Dockerized scientific applications, cloud deployment, molecular simulation workflows, and research software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {softwareAreas.map((group) => <section key={group.title} className="glass-card rounded-2xl p-6"><h2 className="font-semibold text-electric-blue mb-4">{group.title}</h2><ul className="space-y-2 text-sm text-text-secondary">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
        </div>
        {/* Software Cards */}
        <div className="space-y-6">
          {[...software.slice(4), ...software.slice(0, 4)].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 hover-card"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-electric-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-medium text-text-secondary font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-semibold text-white/80 mb-3">Key Features</h4>
                    <ul className="space-y-2.5">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric-blue to-purple shrink-0 mt-1.5" />
                          {feature}
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

export default SoftwarePage;

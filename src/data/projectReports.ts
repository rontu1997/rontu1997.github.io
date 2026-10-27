export type ReportStatus = 'published' | 'coming-soon';

export interface ReportMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ReportSection {
  title: string;
  description: string;
  items?: string[];
}

export interface WorkflowStep {
  label: string;
  detail: string;
}

export const polymerReport = {
  status: 'published' as ReportStatus,
  eyebrow: 'Scientific software · Molecular modelling',
  title: 'Polymer Framework Builder',
  subtitle: 'Build, validate, optimize, and export three-dimensional polymer structures from molecular structure files.',
  summary:
    'A local web application that turns user-selected monomer linkage sites into reproducible polymer chains. It preserves the chemical decisions for the researcher while automating rigid-body placement, torsion control, force-field relaxation, validation, and export.',
  tags: ['Python 3.11+', 'Dash', 'RDKit', 'OpenBabel', 'NumPy', '3Dmol.js'],
  metrics: {
    automatedTests: '111 passing',
    repeatUnits: 'Up to 1,000',
    atomLimit: '100,000',
    exportFormats: 'PDB · MOL · MOL2',
  },
  problem:
    'Preparing polymer models typically means editing coordinates, aligning fragments, setting bond geometry, and minimizing energy by hand. That process becomes slow and error-prone as chains grow.',
  solution:
    'The builder asks the researcher to identify the head and tail atoms, then performs the repeatable geometric work. It does not claim to predict polymerization chemistry or alter bond orders.',
  capabilities: [
    {
      title: 'Interactive homopolymer construction',
      description:
        'Upload PDB, MOL, or MOL2 monomers, select linkage atoms in a 3D viewer, choose chain length, and control every junction torsion from −180° to 180°.',
    },
    {
      title: 'Linear-length targeting',
      description:
        'Enter a target length in nanometres and let the solver estimate the repeat count and torsion that produce the most extended accessible chain.',
    },
    {
      title: 'PDB structure merger',
      description:
        'Join two PDB structures through head–head, tail–tail, head–tail, or tail–head modes while preserving residue and atom naming.',
    },
    {
      title: 'Validated multi-format export',
      description:
        'Save PDB, MOL, or MOL2 output. MOL2 conversion is read back and atom-count checked so a silent conversion failure cannot become a corrupt download.',
    },
  ] satisfies ReportSection[],
  workflow: [
    { label: 'Select', detail: 'Choose chemically feasible head and tail atoms in the interactive 3D viewer.' },
    { label: 'Align', detail: 'Use a rigid-body transform to orient each incoming monomer along the leaving direction.' },
    { label: 'Place', detail: 'Set the new bond length from an element-pair table or covalent radii.' },
    { label: 'Twist', detail: 'Rotate around the new bond until the requested backbone torsion is reached.' },
    { label: 'Optimize', detail: 'Relax with MMFF94 when fully parameterized, otherwise UFF, while restraining junction torsions.' },
    { label: 'Validate', detail: 'Check connectivity, bond lengths, clashes, torsion drift, and energy change before export.' },
  ] satisfies WorkflowStep[],
  validation: [
    { label: 'Structure', value: 'Sanitizes and forms one connected fragment' },
    { label: 'New bonds', value: '0.6×–1.6× the expected bond length' },
    { label: 'Atom clashes', value: 'Flags non-bonded contacts below 0.6× covalent-radii sum' },
    { label: 'Torsion drift', value: 'Warns when a junction differs from target by more than 15°' },
    { label: 'Energy', value: 'Warns when optimization raises energy by more than 1 kcal/mol' },
  ],
  evidence: [
    '111 automated tests cover file round trips, valence feasibility, chain geometry, optimization, the length solver, merger behavior, callbacks, and all export formats.',
    'Optional Playwright workflows exercise real-browser gestures, atom selection, join changes, downloads, tab persistence, and the native save flow.',
    'Fixed random seeds make coordinate generation repeatable when an uploaded monomer has no 3D conformer.',
  ],
  limitations: [
    'Valence feasibility uses typical elemental valence and can be too strict for hypervalent sulfur or phosphorus.',
    'The input must be one connected molecule; monomers containing counter-ions or solvent are rejected.',
    'The merger accepts PDB only, one model per file, with a 20 MB input limit.',
    'The software models geometric connections, not reaction chemistry, and removes only leaving hydrogens.',
  ],
  nextSteps: [
    'Support copolymers with multiple monomer types.',
    'Extend valence handling for hypervalent elements.',
    'Expose polygon and ring presets with explicit closure checks.',
    'Add branched-polymer construction.',
  ],
};

export const gromacsSimulationAgent = {
  slug: 'gromacs-simulation-agent',
  status: 'published' as ReportStatus,
  title: 'GROMACS Simulation Agent',
  subtitle: 'Agent-guided preparation, execution, analysis, and reporting for molecular dynamics workflows.',
  summary:
    'SimAgent packages connected GROMACS commands into explicit, reviewable workflows. Researchers choose the system, force field, simulation stages, and analyses, approve the plan, and receive reproducible outputs in a dedicated run directory.',
  tags: ['Python 3.11+', 'GROMACS 2025.3', 'MCP', 'WSL', 'NumPy', 'Matplotlib'],
  capabilities: [
    {
      title: 'Natural-language water workflow',
      description: 'Turns a natural-language or JSON request into an approved GROMACS plan executed through MCP tools.',
    },
    {
      title: 'Protein structure workflow',
      description: 'Builds a topology, cubic solvent box, optional neutralization, and selected EM, NVT, NPT, and production stages from PDB or GRO coordinates.',
    },
    {
      title: 'Selectable analysis',
      description: 'Parses requested measurements locally and extracts energy, temperature, pressure, density, backbone RMSD, and radius of gyration when available.',
    },
    {
      title: 'Reviewable provenance',
      description: 'Keeps command logs, manifests, an append-only provenance ledger, time series, plots, summaries, and a Markdown report with each run.',
    },
  ] satisfies ReportSection[],
  workflow: [
    { label: 'Prepare', detail: 'Convert PDB/GRO coordinates into a force-field-backed topology with pdb2gmx.' },
    { label: 'Solvate', detail: 'Create a cubic box, add water, and optionally introduce neutralizing counterions.' },
    { label: 'Simulate', detail: 'Run energy minimization and selected NVT, NPT, and production stages.' },
    { label: 'Analyze', detail: 'Extract requested observables from the final molecular-dynamics stage.' },
    { label: 'Report', detail: 'Generate summary data, plots, provenance, and a readable Markdown report.' },
  ] satisfies WorkflowStep[],
  verifiedExample: {
    system: '1AKI lysozyme',
    topology: '129 residues · 1,960 protein atoms',
    solvent: '10,644 TIP4P waters · 8 chloride ions',
    forceField: 'OPLS-AA / TIP4P',
    production: '1 ns',
    timestep: '2 fs',
    measurements: [
      { label: 'Temperature', value: '299.999 K', detail: 'Frame σ 1.598 K' },
      { label: 'Pressure', value: '6.36 bar', detail: 'Frame σ 145.04 bar' },
      { label: 'Density', value: '1014.30 kg/m³', detail: 'Frame σ 3.05 kg/m³' },
      { label: 'Potential energy', value: '−468,618 kJ/mol', detail: 'Frame σ 720.50 kJ/mol' },
      { label: 'Backbone RMSD', value: '0.07645 nm', detail: 'Frame σ 0.00825 nm' },
      { label: 'Radius of gyration', value: '1.42849 nm', detail: 'Frame σ 0.00665 nm' },
    ] satisfies ReportMetric[],
    caveat:
      'The temperature stayed close to 300 K. Pressure fluctuated strongly, so its 1 ns mean does not establish pressure convergence. RMSD and radius of gyration describe this trajectory relative to its saved starting structure; they do not independently validate the force field or biological behavior.',
  },
  verification: [
    'A real GROMACS 2025.3 run completed energy minimization, NVT, NPT, and 1 ns production for the 1AKI example.',
    'Production analysis generated 5,001 energy frames and 2,001 sampled structure frames.',
    'The automated suite last reported 529 passed and 23 skipped in the development environment.',
  ],
  limitations: [
    'Structure inputs must use residue and atom names supported by the selected installed force field.',
    'The workflow does not generate arbitrary ligand parameters or repair missing heavy atoms.',
    'The structure agent does not yet provide the water workflow’s physical validation gates, automatic diagnosis, or checkpoint resume.',
    'The natural-language water workflow currently stops after production without its planned analysis report.',
  ],
};

export const aiResearchAgent = {
  slug: 'ai-research-agent',
  status: 'published' as ReportStatus,
  title: 'AI Research Agent',
  subtitle: 'Evidence-checked web research with source-linked reports and transparent uncertainty.',
  summary:
    'A locally runnable, access-restricted Streamlit pilot that turns an English-language topic into a structured report. Its evidence-first pipeline checks factual claims against retrieved passages and returns a Partial or Failed result when support is insufficient.',
  tags: ['Python 3.11+', 'Streamlit', 'Pydantic', 'OpenAI', 'HTTPX', 'uv'],
  modes: [
    { label: 'Quick', value: '2 min', detail: 'Up to 8 selected sources · 14 drafted claims · USD 0.75 modeled ceiling' },
    { label: 'Deep', value: '6 min', detail: 'Up to 20 selected sources · 36 drafted claims · USD 3.00 modeled ceiling' },
  ] satisfies ReportMetric[],
  capabilities: [
    {
      title: 'Evidence-checked claims',
      description: 'Checks citation ownership, exact quotes, numbers, and dates in code, then reviews semantic support. Unsupported claims are repaired or removed.',
    },
    {
      title: 'Transparent result status',
      description: 'Distinguishes Completed, Partial, and Failed runs using supported-claim, source-diversity, and topic-coverage thresholds.',
    },
    {
      title: 'Inspectable research trail',
      description: 'Shows numbered citations, source passages, evidence types, coverage, warnings, and relevant sources excluded from the final report.',
    },
    {
      title: 'Bounded operation',
      description: 'Uses per-mode limits for time, sources, claims, estimated cost, concurrency, and provider requests.',
    },
  ] satisfies ReportSection[],
  workflow: [
    { label: 'Plan', detail: 'Convert the topic into research facets and search queries.' },
    { label: 'Collect', detail: 'Search, normalize, deduplicate, and rank public web evidence.' },
    { label: 'Draft', detail: 'Write atomic claims with references to the current run’s evidence registry.' },
    { label: 'Verify', detail: 'Check quotes, citations, numbers, and dates, then review semantic support.' },
    { label: 'Repair', detail: 'Revise or remove failed claims and scan remaining prose for unsupported facts.' },
    { label: 'Report', detail: 'Assemble the cited report, evidence appendix, coverage summary, and Markdown export.' },
  ] satisfies WorkflowStep[],
  verification: [
    'The project report records 537 automated tests passed on 27 October 2026, along with passing Ruff and strict mypy checks across 93 source files.',
    'An offline end-to-end demo completed with eight supported claims from five synthetic sources; the synthetic data is not real research evidence.',
    'The ordinary test suite uses scripted providers without paid external API calls.',
  ],
  limitations: [
    'The current OpenAI search path relies on result snippets and does not retrieve full source pages itself.',
    'The default writer and reviewer use the same model, so their errors may be correlated.',
    'A passage supporting a claim does not prove that its source is factually correct.',
    'The pilot supports English topics only and keeps active runs in process memory; reload and restart recovery are unavailable.',
    'Markdown is the only export format. Public anonymous multi-user deployment needs additional authentication and shared infrastructure.',
  ],
};

export const agenticAIReport = {
  status: 'published' as ReportStatus,
  eyebrow: 'Agentic AI · Scientific computing',
  title: 'Agentic AI for Scientific R&D',
  subtitle: 'Scientific agents for simulation workflows and evidence-checked research.',
  summary:
    'This initiative connects AI workflows with scientific tools and inspectable sources. SimAgent organizes molecular simulation, while the AI Research Agent checks claims against retrieved evidence before producing a report.',
  agents: [gromacsSimulationAgent, aiResearchAgent],
};

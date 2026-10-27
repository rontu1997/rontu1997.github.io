import type { ReportMetric, ReportSection, WorkflowStep } from './projectReports';

export interface ContainerReport {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  metrics: ReportMetric[];
  capabilities: ReportSection[];
  workflow: WorkflowStep[];
  evidence: string[];
  limitations: string[];
  interpretation?: string;
}

export const cloudContainerReports: ContainerReport[] = [
  {
    id: 'gromacs-container',
    title: 'GROMACS 2025.3 CPU + MPI',
    subtitle: 'A reproducible molecular-dynamics runtime with external MPI and OpenMP.',
    summary: 'Built from a checksum-verified official source archive in a separate build stage. The non-root runtime supports simulation preparation, parallel CPU execution, checkpoint continuation, and trajectory analysis.',
    tags: ['GROMACS 2025.3', 'Open MPI 4.1.6', 'OpenMP', 'Ubuntu 24.04', 'CPU'],
    metrics: [
      { label: 'Functional test', value: '20 MD steps', detail: 'Two MPI ranks · one OpenMP thread per rank' },
      { label: 'Water-box helper', value: 'TIP4P', detail: 'Four sites validated per molecule' },
      { label: 'Runtime', value: 'Non-root', detail: 'UID 10001 · writable /work' },
    ],
    capabilities: [
      { title: 'Parallel CPU simulation', description: 'External MPI ranks and OpenMP threads are explicit, with GPU and internal thread-MPI support disabled.' },
      { title: 'Simulation and analysis tools', description: 'Supports topology preparation, solvation, ion placement, grompp, minimization, NVE/NVT/NPT runs, checkpoints, and standard trajectory analyses.' },
    ],
    workflow: [
      { label: 'Build', detail: 'Verify the official source archive and compile GROMACS with CMake and Ninja.' },
      { label: 'Run', detail: 'Execute gmx_mpi from mounted inputs, setting MPI ranks and OpenMP threads within the CPU allocation.' },
      { label: 'Inspect', detail: 'Keep coordinate, energy, checkpoint, and log artifacts under /work.' },
    ],
    evidence: [
      'A smoke test builds a 3 nm SPC water box, runs 20 MD steps with two MPI ranks, and checks coordinate, energy, and checkpoint files.',
      'The runtime test checks writable output, available executables, version commands, and a captured status artifact.',
      'A TIP4P helper validates four coordinate sites per water molecule; its default example builds a 4 nm box capped at 1,000 waters.',
    ],
    limitations: [
      'The image is CPU-only and does not include CUDA, SYCL, or other GPU backends.',
      'The short smoke test is not the full upstream GROMACS regression suite.',
      'Multi-host MPI needs separate scheduler and networking integration; the documented run uses one container.',
      'The report documents local validation, not cloud registration or remote deployment.',
    ],
  },
  {
    id: 'acpype-container',
    title: 'ACPYPE Ligand Topology',
    subtitle: 'A portable small-molecule parameterization and AMBER-to-GROMACS conversion environment.',
    summary: 'A non-root, CPU-only Linux image packages ACPYPE 2026.9.5 with Python 3.12, Open Babel, and bundled Linux AmberTools programs. Read-only inputs and an isolated writable work directory support scripted molecular-simulation workflows.',
    tags: ['ACPYPE 2026.9.5', 'AmberTools', 'Open Babel', 'Python 3.12', 'CPU'],
    metrics: [
      { label: 'Scientific smoke test', value: 'Ethanol', detail: 'AM1-BCC / GAFF2 topology generation' },
      { label: 'AmberTools', value: '14 executables', detail: 'Checked in the offline smoke test' },
      { label: 'Upstream tests', value: '154 passed', detail: '6 GROMACS-dependent integrations skipped' },
    ],
    capabilities: [
      { title: 'Ligand topology generation', description: 'Accepts MOL2, PDB, MDL/MOL, or SMILES; supports AM1-BCC and gas-phase charges with GAFF, GAFF2, or AMBER atom typing.' },
      { title: 'Format conversion', description: 'Generates AMBER, GROMACS, CNS/XPLOR, and CHARMM outputs, and converts existing AMBER prmtop/inpcrd files to GROMACS formats.' },
    ],
    workflow: [
      { label: 'Build', detail: 'Verify the pinned ACPYPE source archive and install hash-locked Python dependencies.' },
      { label: 'Execute', detail: 'Run ACPYPE from a non-root account with read-only inputs in /app/inputs and outputs under /work.' },
      { label: 'Validate', detail: 'Check generated topologies and logs, and propagate calculation failures to the caller.' },
    ],
    evidence: [
      'The offline smoke test checks ACPYPE, Open Babel bindings, all 14 bundled AmberTools programs, and nonempty AMBER, GROMACS, and CHARMM outputs.',
      'The test converts generated AMBER files back into GROMACS formats.',
      'The reported upstream result is 154 passed, 6 integration tests skipped, and 93.16% measured coverage.',
    ],
    limitations: [
      'The bundled AmberTools executables target Linux x86-64.',
      'Scientific validity depends on correct molecular identity, net charge, charge method, atom typing, and compatible force fields.',
      'Six skipped upstream integrations require a separate GROMACS installation.',
      'The report documents local validation, not cloud registration or remote deployment.',
    ],
  },
  {
    id: 'autodock-container',
    title: 'AutoDock Vina Docking',
    subtitle: 'A compact CPU container for reproducible protein–ligand docking from prepared PDBQT inputs.',
    summary: 'A pinned upstream revision is compiled in a dedicated stage, leaving a slim, non-root runtime with vina, vina_split, and Python 3 for orchestration. Docking poses and logs are retained in the mounted output directory.',
    tags: ['AutoDock Vina', 'PDBQT', 'Python 3', 'Debian Bookworm Slim', 'CPU'],
    metrics: [
      { label: 'Demonstration', value: 'c-Abl / imatinib', detail: 'Prepared receptor and ligand inputs' },
      { label: 'Saved poses', value: '9', detail: 'Seed 42 · exhaustiveness 32 · 4 CPU threads' },
      { label: 'Best predicted score', value: '−13.25 kcal/mol', detail: 'Vina scoring · 20 × 20 × 20 Å box' },
    ],
    capabilities: [
      { title: 'Prepared-input docking', description: 'Runs a rigid-receptor Vina or Vinardo workflow with an explicit docking box; AD4 scoring is available when compatible maps are supplied.' },
      { title: 'Scriptable execution', description: 'Python workflows pass argument arrays to the command-line tools and check exit codes, pose files, and logs before reporting success.' },
    ],
    workflow: [
      { label: 'Prepare', detail: 'Supply receptor and ligand PDBQT files and a scientifically chosen docking box.' },
      { label: 'Dock', detail: 'Set the scoring method, exhaustiveness, CPU count, and random seed explicitly.' },
      { label: 'Review', detail: 'Inspect ranked poses, the multi-pose PDBQT output, and the retained docking log.' },
    ],
    evidence: [
      'The recorded c-Abl/imatinib run produced nine poses with a best predicted Vina score of −13.25 kcal/mol.',
      'The image checks the pinned source revision before compilation and runs as a non-root numeric user.',
      'The workflow verifies that pose and log files exist and are nonempty before reporting success.',
    ],
    limitations: [
      'Receptor and ligand preparation are not included; inputs must already be PDBQT.',
      'The image does not contain Vina Python bindings, Meeko, AutoGrid, or AmberTools.',
      'Docking results depend on preparation, protonation, box, scoring, and sampling choices.',
      'The report documents local validation, not cloud registration or remote deployment.',
    ],
    interpretation: 'The docking score is a computational prediction. It is not an experimentally measured binding affinity or proof of biological activity.',
  },
];

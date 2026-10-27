export const currentProjects = [
  {
    "slug": "agentic-ai-scientific-rd",
    "title": "Agentic AI for Scientific R&D",
    "homeTitle": "Agentic AI for Scientific R&D",
    "description": "Two research agents for reviewable GROMACS simulations and evidence-checked, source-linked research reports.",
    "motivation": "Connect scientific tools and public research sources to workflows with inspectable results and explicit uncertainty.",
    "methodology": [
      "Execute approved GROMACS simulation plans through MCP tools",
      "Preserve simulation commands, manifests, provenance, and numerical outputs",
      "Check research claims against source passages, quotes, numbers, and dates",
      "Report evidence gaps as Partial or Failed outcomes"
    ],
    "keyFindings": [
      "A real GROMACS 2025.3 workflow completed a 1 ns 1AKI lysozyme simulation",
      "The research pilot's offline demo produced eight supported claims from five synthetic sources"
    ],
    "image": `${import.meta.env.BASE_URL}images/Project-1.png`,
    "overview": "Scientific agents for reproducible molecular simulation and evidence-checked web research.",
    "repositories": [
      { "label": "Simulation Agent", "url": "https://github.com/rontu1997/Simulation-Agent" },
      { "label": "AI Research Agent", "url": "https://github.com/rontu1997/AI-Research-Agent" }
    ],
    "publications": [],
    "gallery": []
  },
  {
    "slug": "cloud-scientific-tool-containers",
    "title": "Cloud Scientific Tool Containers",
    "homeTitle": "Cloud Scientific Computing Tools",
    "description": "Reproducible CPU containers for GROMACS molecular dynamics, ACPYPE ligand topology generation, and AutoDock Vina docking.",
    "motivation": "Package specialist scientific software into portable, testable environments for scripted and managed workflows.",
    "methodology": [
      "Build the tools from pinned and verified sources in multi-stage Docker images",
      "Run calculations as non-root users with separate inputs and outputs",
      "Validate GROMACS, ACPYPE, and AutoDock Vina using scientific smoke tests"
    ],
    "keyFindings": [
      "A two-rank GROMACS water-box simulation produced coordinate, energy, and checkpoint artifacts",
      "ACPYPE topology conversion and an AutoDock Vina docking example produced checked outputs"
    ],
    "image": `${import.meta.env.BASE_URL}images/Project-2.png`,
    "overview": "Locally validated scientific containers designed for portable and managed computational workflows.",
    "repositories": [
      { "label": "GROMACS", "url": "https://github.com/rontu1997/gromacs-2025.3-cpu" },
      { "label": "ACPYPE", "url": "https://github.com/rontu1997/acpype" },
      { "label": "AutoDock Vina", "url": "https://github.com/rontu1997/autodock" }
    ],
    "publications": [],
    "gallery": []
  },
  {
    "slug": "polymer-framework-builder",
    "title": "Polymer Framework Builder",
    "homeTitle": "Polymer Framework Builder",
    "description": "An interactive application for building, optimizing, validating, and exporting three-dimensional polymer chains from molecular structure files.",
    "motivation": "Automate repetitive molecular geometry work while leaving linkage-site and chemistry decisions with the researcher.",
    "methodology": [
      "Select head and tail atoms in an interactive 3D molecular viewer",
      "Place repeat units with exact bond geometry and controlled junction torsions",
      "Optimize with MMFF94 or UFF and validate bonds, clashes, torsion drift, and energy",
      "Export verified structures as PDB, MOL, or MOL2"
    ],
    "keyFindings": [
      "Chains of up to 1,000 repeat units with a 100,000-atom safety cap",
      "111 automated tests covering chemistry, geometry, merging, and export"
    ],
    "image": `${import.meta.env.BASE_URL}images/polymer-builder-workflow-concept.png`,
    "imageAlt": "Concept infographic of the Polymer Builder workflow and polymer structures",
    "overview": "A local web application for reproducible polymer-chain construction, constrained optimization, validation, and multi-format export.",
    "repositories": [
      { "label": "Polymer Builder", "url": "https://github.com/rontu1997/Polymer-Builder" }
    ],
    "publications": [],
    "gallery": []
  }
];

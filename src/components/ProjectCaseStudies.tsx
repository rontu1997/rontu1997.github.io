import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  FlaskConical,
  Layers3,
} from 'lucide-react';
import {
  agenticAIReport,
  aiResearchAgent,
  gromacsSimulationAgent,
  polymerReport,
  type ReportMetric,
  type ReportSection,
  type WorkflowStep,
} from '../data/projectReports';

export const SectionHeading = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) => (
  <div className="mb-8">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric-blue mb-3">{eyebrow}</p>
    <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
    {copy && <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-4 max-w-3xl">{copy}</p>}
  </div>
);

export const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span key={tag} className="rounded-full border border-electric-blue/20 bg-electric-blue/5 px-3 py-1.5 text-xs text-blue-100">
        {tag}
      </span>
    ))}
  </div>
);

export const MetricGrid = ({ metrics }: { metrics: ReportMetric[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {metrics.map((metric) => (
      <div key={metric.label} className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
        <p className="text-xs uppercase tracking-wider text-text-secondary mb-2">{metric.label}</p>
        <p className="text-lg font-semibold text-white">{metric.value}</p>
        {metric.detail && <p className="text-xs text-text-secondary mt-1">{metric.detail}</p>}
      </div>
    ))}
  </div>
);

export const CapabilityGrid = ({ items }: { items: ReportSection[] }) => (
  <div className="grid md:grid-cols-2 gap-4">
    {items.map((item) => (
      <article key={item.title} className="glass-card rounded-2xl p-5 sm:p-6">
        <CheckCircle2 size={18} className="text-electric-blue mb-4" />
        <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
      </article>
    ))}
  </div>
);

export const Workflow = ({ steps }: { steps: WorkflowStep[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {steps.map((step, index) => (
      <div key={step.label} className="relative rounded-xl border border-white/5 bg-white/[0.025] p-5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric-blue to-purple-600 text-xs font-bold text-white mb-4">
          {index + 1}
        </span>
        <h3 className="text-sm font-semibold text-white mb-2">{step.label}</h3>
        <p className="text-xs text-text-secondary leading-relaxed">{step.detail}</p>
      </div>
    ))}
  </div>
);

export const BulletPanel = ({ title, items, warning = false }: { title: string; items: string[]; warning?: boolean }) => (
  <div className="glass-card rounded-2xl p-6 sm:p-7">
    <div className="flex items-center gap-3 mb-5">
      {warning ? <AlertTriangle size={19} className="text-amber-300" /> : <CheckCircle2 size={19} className="text-electric-blue" />}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${warning ? 'bg-amber-300' : 'bg-electric-blue'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const PolymerCaseStudy = () => {
  const headlineMetrics: ReportMetric[] = [
    { label: 'Automated verification', value: polymerReport.metrics.automatedTests },
    { label: 'Maximum chain size', value: polymerReport.metrics.repeatUnits },
    { label: 'System limit', value: polymerReport.metrics.atomLimit },
    { label: 'Export formats', value: polymerReport.metrics.exportFormats },
  ];

  return (
    <div className="space-y-20">
      <section className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-electric-blue mb-4">{polymerReport.eyebrow}</p>
        <p className="text-xl sm:text-2xl font-semibold text-white leading-snug max-w-4xl">{polymerReport.subtitle}</p>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-5 max-w-4xl">{polymerReport.summary}</p>
        <div className="mt-7"><TagList tags={polymerReport.tags} /></div>
        <div className="mt-8"><MetricGrid metrics={headlineMetrics} /></div>
      </section>

      <section>
        <SectionHeading eyebrow="Research challenge" title="From manual molecular editing to a repeatable workflow" />
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass-card rounded-2xl p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white mb-3">The problem</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{polymerReport.problem}</p>
          </div>
          <div className="glass-card rounded-2xl p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white mb-3">The approach</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{polymerReport.solution}</p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Capabilities" title="One interface for building, joining, and exporting structures" />
        <CapabilityGrid items={polymerReport.capabilities} />
      </section>

      <section>
        <SectionHeading eyebrow="Method" title="Geometry-first construction with force-field refinement" copy="Every repeat unit is positioned with an explicit rigid-body transform before optimization, keeping bond placement and torsion control inspectable." />
        <Workflow steps={polymerReport.workflow} />
      </section>

      <section>
        <SectionHeading eyebrow="Quality gates" title="Post-build checks make problems visible" />
        <div className="overflow-hidden rounded-2xl border border-white/5">
          {polymerReport.validation.map((item, index) => (
            <div key={item.label} className={`grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 px-5 py-4 ${index % 2 === 0 ? 'bg-white/[0.035]' : 'bg-white/[0.015]'}`}>
              <span className="text-sm font-medium text-white">{item.label}</span>
              <span className="text-sm text-text-secondary">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-5">
        <BulletPanel title="Verification evidence" items={polymerReport.evidence} />
        <BulletPanel title="Current limitations" items={polymerReport.limitations} warning />
      </section>

      <section className="glass-card rounded-2xl p-6 sm:p-8">
        <SectionHeading eyebrow="Roadmap" title="Planned extensions" />
        <div className="grid sm:grid-cols-2 gap-3">
          {polymerReport.nextSteps.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-white/[0.025] p-4 text-sm text-text-secondary">
              <ArrowRight size={16} className="text-electric-blue shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const AgenticAICaseStudy = () => (
  <div className="space-y-20">
    <section className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10">
      <p className="text-xs uppercase tracking-[0.22em] text-electric-blue mb-4">{agenticAIReport.eyebrow}</p>
      <p className="text-xl sm:text-2xl font-semibold text-white leading-snug max-w-4xl">{agenticAIReport.subtitle}</p>
      <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-5 max-w-4xl">{agenticAIReport.summary}</p>
    </section>

    <section>
      <SectionHeading eyebrow="Agent portfolio" title="Purpose-built agents for scientific R&D" />
      <div className="grid lg:grid-cols-2 gap-5">
        <article className="glass-card rounded-2xl p-6 sm:p-7 border-electric-blue/20">
          <div className="flex items-start justify-between gap-4 mb-5">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue"><FlaskConical size={22} /></span>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">Case study</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{gromacsSimulationAgent.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{gromacsSimulationAgent.subtitle}</p>
          <a href="#gromacs-agent" className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-electric-blue hover:text-white transition-colors">
            Explore the agent <ArrowRight size={15} />
          </a>
        </article>

        <article className="glass-card rounded-2xl p-6 sm:p-7 border-electric-blue/20">
          <div className="flex items-start justify-between gap-4 mb-5">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300"><Bot size={22} /></span>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">Case study</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{aiResearchAgent.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{aiResearchAgent.subtitle}</p>
          <a href="#ai-research-agent" className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-electric-blue hover:text-white transition-colors">
            Explore the agent <ArrowRight size={15} />
          </a>
        </article>
      </div>
    </section>

    <section id="gromacs-agent" className="scroll-mt-28">
      <SectionHeading eyebrow="Featured case study" title={gromacsSimulationAgent.title} copy={gromacsSimulationAgent.summary} />
      <TagList tags={gromacsSimulationAgent.tags} />
    </section>

    <section>
      <SectionHeading eyebrow="Capabilities" title="A reviewable molecular-simulation workflow" />
      <CapabilityGrid items={gromacsSimulationAgent.capabilities} />
    </section>

    <section>
      <SectionHeading eyebrow="Workflow" title="From structure input to scientific report" />
      <Workflow steps={gromacsSimulationAgent.workflow} />
    </section>

    <section className="glass-card rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-7">
        <Layers3 size={21} className="text-electric-blue" />
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-electric-blue mb-1">Verified example</p>
          <h2 className="text-2xl font-bold text-white">{gromacsSimulationAgent.verifiedExample.system}</h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
        {[
          ['Topology', gromacsSimulationAgent.verifiedExample.topology],
          ['Solvated system', gromacsSimulationAgent.verifiedExample.solvent],
          ['Force field', gromacsSimulationAgent.verifiedExample.forceField],
          ['Production', gromacsSimulationAgent.verifiedExample.production],
          ['Time step', gromacsSimulationAgent.verifiedExample.timestep],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-[11px] uppercase tracking-wider text-text-secondary mb-2">{label}</p>
            <p className="text-sm font-semibold text-white leading-snug">{value}</p>
          </div>
        ))}
      </div>
      <MetricGrid metrics={gromacsSimulationAgent.verifiedExample.measurements} />
      <div className="mt-6 rounded-xl border border-amber-300/15 bg-amber-300/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-200 mb-2">Interpretation note</p>
        <p className="text-sm text-text-secondary leading-relaxed">{gromacsSimulationAgent.verifiedExample.caveat}</p>
      </div>
    </section>

    <section className="grid lg:grid-cols-2 gap-5">
      <BulletPanel title="Verification evidence" items={gromacsSimulationAgent.verification} />
      <BulletPanel title="Current scope and limitations" items={gromacsSimulationAgent.limitations} warning />
    </section>

    <div className="section-divider" aria-hidden="true" />

    <section id="ai-research-agent" className="scroll-mt-28">
      <SectionHeading eyebrow="Research agent case study" title={aiResearchAgent.title} copy={aiResearchAgent.summary} />
      <TagList tags={aiResearchAgent.tags} />
    </section>

    <section>
      <SectionHeading eyebrow="Research modes" title="Two bounded levels of research depth" copy="The ceilings below are configured limits, not a charge or a promise about what a single run will use." />
      <div className="grid sm:grid-cols-2 gap-4">
        {aiResearchAgent.modes.map((mode) => (
          <div key={mode.label} className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-electric-blue mb-3">{mode.label} mode</p>
            <p className="text-2xl font-semibold text-white mb-2">{mode.value} limit</p>
            <p className="text-sm text-text-secondary leading-relaxed">{mode.detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionHeading eyebrow="Capabilities" title="Research with inspectable evidence" />
      <CapabilityGrid items={aiResearchAgent.capabilities} />
    </section>

    <section>
      <SectionHeading eyebrow="Workflow" title="From topic to supported claims" />
      <Workflow steps={aiResearchAgent.workflow} />
    </section>

    <section className="grid lg:grid-cols-2 gap-5">
      <BulletPanel title="Reported verification" items={aiResearchAgent.verification} />
      <BulletPanel title="Pilot limitations" items={aiResearchAgent.limitations} warning />
    </section>
  </div>
);

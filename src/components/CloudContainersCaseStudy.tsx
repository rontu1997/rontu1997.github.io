import { ArrowRight, Boxes, FlaskConical, ShieldCheck } from 'lucide-react';
import { cloudContainerReports } from '../data/cloudContainerReports';
import {
  BulletPanel,
  CapabilityGrid,
  MetricGrid,
  SectionHeading,
  TagList,
  Workflow,
} from './ProjectCaseStudies';

export const CloudContainersCaseStudy = () => (
  <div className="space-y-20">
    <section className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10">
      <p className="text-xs uppercase tracking-[0.22em] text-electric-blue mb-4">Scientific software · Reproducible containers</p>
      <p className="text-xl sm:text-2xl font-semibold text-white leading-snug max-w-4xl">
        Portable runtimes for molecular dynamics, ligand topology generation, and docking.
      </p>
      <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-5 max-w-4xl">
        Three CPU containers package specialist scientific tools with pinned sources, isolated outputs, and functional validation. They are designed for scripted and managed workflows. The supplied reports document local validation; they do not establish cloud registration or deployment.
      </p>
      <div className="grid sm:grid-cols-3 gap-3 mt-8">
        <div className="rounded-xl bg-white/[0.03] p-4"><Boxes className="text-electric-blue mb-3" size={20} /><p className="text-sm font-semibold text-white">Three tool environments</p><p className="text-xs text-text-secondary mt-1">GROMACS · ACPYPE · AutoDock Vina</p></div>
        <div className="rounded-xl bg-white/[0.03] p-4"><ShieldCheck className="text-electric-blue mb-3" size={20} /><p className="text-sm font-semibold text-white">Pinned and isolated</p><p className="text-xs text-text-secondary mt-1">Verified sources · non-root execution</p></div>
        <div className="rounded-xl bg-white/[0.03] p-4"><FlaskConical className="text-electric-blue mb-3" size={20} /><p className="text-sm font-semibold text-white">Scientifically exercised</p><p className="text-xs text-text-secondary mt-1">Molecular systems and output artifacts checked</p></div>
      </div>
    </section>

    <section>
      <SectionHeading eyebrow="Tool portfolio" title="Explore the three containers" />
      <div className="grid md:grid-cols-3 gap-4">
        {cloudContainerReports.map((report) => (
          <article key={report.id} className="glass-card rounded-2xl p-6 flex flex-col">
            <p className="text-xs uppercase tracking-widest text-electric-blue mb-4">Scientific container</p>
            <h3 className="text-lg font-semibold text-white mb-3">{report.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed flex-1">{report.subtitle}</p>
            <a className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-electric-blue hover:text-white transition-colors" href={`#${report.id}`}>
              Read case study <ArrowRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>

    {cloudContainerReports.map((report) => (
      <div key={report.id} className="space-y-14">
        <div className="section-divider" aria-hidden="true" />
        <section id={report.id} className="scroll-mt-28">
          <SectionHeading eyebrow="Container case study" title={report.title} copy={report.summary} />
          <TagList tags={report.tags} />
        </section>

        <section>
          <SectionHeading eyebrow="Reported results" title="What the validation demonstrated" />
          <MetricGrid metrics={report.metrics} />
          {report.interpretation && (
            <div className="mt-5 rounded-xl border border-amber-300/15 bg-amber-300/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-200 mb-2">Scientific interpretation</p>
              <p className="text-sm text-text-secondary leading-relaxed">{report.interpretation}</p>
            </div>
          )}
        </section>

        <section>
          <SectionHeading eyebrow="Capabilities" title="What this image provides" />
          <CapabilityGrid items={report.capabilities} />
        </section>

        <section>
          <SectionHeading eyebrow="Execution" title="From input to inspectable output" />
          <Workflow steps={report.workflow} />
        </section>

        <section className="grid lg:grid-cols-2 gap-5">
          <BulletPanel title="Verification evidence" items={report.evidence} />
          <BulletPanel title="Scope and limitations" items={report.limitations} warning />
        </section>
      </div>
    ))}
  </div>
);

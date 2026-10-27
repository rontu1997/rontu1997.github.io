import { fullProfile, researchJourney, currentFocus, professionalInterests, technicalAreas, professionalDirection } from '../data/positioning';
import { professionalExperience } from '../data/professional';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Mail,
  Atom,
  Brain,
  FlaskConical,
  Zap,
  Leaf,
  Beaker,
  Calendar,
  Trophy,
  Star,
} from 'lucide-react';

const education = [
  {
    degree: 'Ph.D. in Chemical Engineering',
    description: 'Research focused on Molecular Dynamics, computational materials science, and AI-assisted molecular simulation.',
    status: 'Completed',
    institution: 'Institute of Chemical Technology, Mumbai',
    university: 'Institute of Chemical Technology, Mumbai',
    period: '2021 – 2026',
    thesis: 'Artificial Intelligence Assisted Molecular Dynamics Simulation of Carboxymethyl Cellulose–Polyvinyl Alcohol Click Hydrogels for Various Applications',
  },
  {
    degree: 'M.Tech in Chemical Engineering',
    description: 'The project was originally planned as experimental research. Because much of the second year coincided with COVID-19-related restrictions on laboratory access, the work focused primarily on an extensive literature review and theoretical study of the proposed experimental research.',
    university: 'University of Calcutta',
    period: '2019 – 2021',
    thesis: 'Biocatalytic Production of Essential Fatty Acids in Ionic Liquid/Surfactant Mixed System',
  },
  {
    degree: 'B.Tech in Chemical Engineering',
    description: 'Undergraduate research focused on experimental Chemical Engineering.',
    university: 'Maulana Abul Kalam Azad University of Technology',
    period: '2015 – 2019',
  },
];

const researchInterests = professionalInterests.map((item, i) => ({ ...item, icon: [Brain, FlaskConical, Zap, Beaker, Leaf, Atom, Brain][i] }));

const achievements = [
  '13+ SCI publications in high-impact journals',
  '3 copyrights for computational tools and frameworks',
  '90+ citations across published research',
  'Multiple international collaborations across research domains',
  'Developed AI-MD integration frameworks for materials discovery',
  'Published in ACS, Elsevier, Wiley, and Springer journals',
];

const awards = [
  { title: 'Research Excellence Award', year: '2025', desc: 'Recognized for outstanding contributions in computational materials science.' },
  { title: 'Best Paper Presentation', year: '2024', desc: 'Award for molecular dynamics research presentation at national conference.' },
  { title: 'GATE Qualified', year: '2020', desc: 'Graduate Aptitude Test in Engineering – Chemical Engineering.' },
];

const AboutPage = () => {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            Research Scientist working at the intersection of Artificial Intelligence, scientific computing, molecular simulation, and industrial R&D.
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-20">
          {/* Left — Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-card">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-electric-blue via-deep-blue to-purple opacity-60 blur-sm" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/Profile.png`}
                    alt="Rontu Das"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-black"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-1">Rontu Das</h2>
              <p className="text-electric-blue text-sm font-medium text-center mb-6">
                AI for Science | Agentic AI | Scientific Computing
              </p>
              <div className="space-y-3">
                {[
                  { icon: GraduationCap, text: 'Research Scientist' },
                  { icon: MapPin, text: 'Bengaluru, Karnataka, India' },
                  { icon: Mail, text: 'rd.rontu1711@gmail.com' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-electric-blue" />
                    </div>
                    <span className="break-all">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Full Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-card">
              <h3 className="text-lg font-semibold mb-4 gradient-text-blue">About Me</h3>
              {fullProfile.map((paragraph) => (
                <p key={paragraph} className="text-text-secondary text-sm leading-relaxed mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-card">
              <h3 className="text-lg font-semibold mb-4 gradient-text-blue">Research Journey</h3>
              {researchJourney.map((paragraph) => (
                <p key={paragraph} className="text-text-secondary text-sm leading-relaxed mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 hover-card">
            <h3 className="text-lg font-semibold text-white mb-1">{professionalExperience.role}</h3>
            <p className="text-electric-blue text-sm font-medium">{professionalExperience.organization}</p>
            <p className="text-yellow-400 text-xs font-medium mt-2 mb-4">{professionalExperience.period}</p>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">{professionalExperience.focus}</p>
            <h4 className="text-sm font-semibold text-white mb-3">Responsibilities and Contributions</h4>
            <ul className="space-y-3">
              {professionalExperience.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shrink-0 mt-2" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <section className="mb-20" aria-labelledby="current-focus">
          <h2 id="current-focus" className="text-2xl sm:text-3xl font-bold mb-8 text-center">Current Professional <span className="gradient-text">Focus</span></h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {currentFocus.map((item) => <div key={item.title} className="glass-card rounded-2xl p-6"><h3 className="text-lg font-semibold mb-3 text-electric-blue">{item.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{item.description}</p></div>)}
          </div>
        </section>
        <section className="mb-20" aria-labelledby="technical-areas">
          <h2 id="technical-areas" className="text-2xl sm:text-3xl font-bold mb-8 text-center">Technical <span className="gradient-text">Areas</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalAreas.map((group) => <div key={group.title} className="glass-card rounded-2xl p-6"><h3 className="font-semibold mb-4">{group.title}</h3><ul className="space-y-2 text-sm text-text-secondary">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </section>
        <section className="mb-20 max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8" aria-labelledby="professional-direction">
          <h2 id="professional-direction" className="text-2xl font-bold mb-6 gradient-text">Professional Direction</h2>
          {professionalDirection.map((paragraph) => <p key={paragraph} className="text-sm text-text-secondary leading-relaxed mb-4 last:mb-0">{paragraph}</p>)}
        </section>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card rounded-2xl p-6 hover-card relative"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{edu.degree}</h3>
                    {edu.institution && (
                      <p className="text-electric-blue text-sm font-medium mb-0.5">{edu.institution}</p>
                    )}
                    {edu.university && edu.university !== edu.institution && (
                      <p className="text-electric-blue text-xs mb-1">{edu.university}</p>
                    )}
                    <div className="flex items-center gap-2 text-yellow-400 text-xs mb-2 mt-1 font-medium">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                    {edu.status && <p className="text-electric-blue text-xs font-semibold mb-2">{edu.status}</p>}
                    <p className="text-text-secondary text-sm leading-relaxed mt-3">{edu.description}</p>
                    {edu.thesis && (
                      <p className="text-text-secondary text-xs mt-2 italic">
                        Thesis: {edu.thesis}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Core Professional <span className="gradient-text">Interests</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchInterests.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="glass-card rounded-2xl p-6 hover-card"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-electric-blue" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-card text-center"
              >
                <div className="w-11 h-11 mx-auto rounded-xl bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 flex items-center justify-center mb-4">
                  <Trophy size={20} className="text-yellow-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{award.title}</h3>
                <p className="text-electric-blue text-xs font-medium mb-2">{award.year}</p>
                <p className="text-text-secondary text-xs">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 sm:p-8 hover-card">
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-electric-blue/20 to-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Star size={12} className="text-electric-blue" />
                  </div>
                  <p className="text-text-secondary text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;

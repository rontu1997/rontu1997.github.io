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
    Degree: 'Ph.D. in Chemical Engineering',
    Institution: 'National Institute of Technology, Raipur',
    period: '2021 – 2026',
    focus: 'Molecular Dynamics Simulations, Computational Chemistry, AI for Materials Science',
  },
  {
    degree: 'M.Tech in Chemical Engineering',
	institution: 'Rajabazar Science College',
    University: 'University of Calcutta',
    period: '2019 – 2021',
    focus: 'Process Engineering & Computational Methods',
  },
  {
    Degree: 'B.Tech in Chemical Engineering',
	institution: 'Calcutta Institute of Technology',
    University: 'Maulana Abul Kalam Azad University of Technology',
    period: '2015 – 2019',
    focus: 'Chemical Engineering Fundamentals',
  },
];

const researchInterests = [
  { icon: Atom, title: 'Molecular Dynamics Simulations', desc: 'Atomistic and coarse-grained simulations of soft materials, polymers, and biomolecular systems using GROMACS and LAMMPS.' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Reservoir computing, deep learning, and generative AI for property prediction and molecular design.' },
  { icon: FlaskConical, title: 'Hydrogels & Soft Materials', desc: 'Computational design of thiol-ene click-crosslinked hydrogels for drug delivery and biomedical applications.' },
  { icon: Zap, title: 'Energy Materials', desc: 'Eutectogels and electrolyte systems for lithium-ion batteries and next-generation energy storage.' },
  { icon: Leaf, title: 'Environmental Engineering', desc: 'Sustainable materials for pollutant adsorption, wastewater treatment, and environmental remediation.' },
  { icon: Beaker, title: 'Food & Nutraceutical Science', desc: 'Molecular-level investigation of food systems, bioactive compounds, and nutraceutical formulations.' },
];

const achievements = [
  '13+ SCI publications in high-impact journals',
  '3 copyrights for computational tools and frameworks',
  '80+ citations across published research',
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
            A passionate researcher bridging computational science, molecular simulations, and artificial intelligence for advanced materials discovery.
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
                    src="./images/Profile.png"
                    alt="Rontu Das"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-black"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-1">Rontu Das</h2>
              <p className="text-electric-blue text-sm font-medium text-center mb-6">
                Computational Chemist & MD Researcher
              </p>
              <div className="space-y-3">
                {[
                  { icon: GraduationCap, text: 'PhD Researcher, Chemical Engineering' },
                  { icon: MapPin, text: 'NIT Raipur, India' },
                  { icon: Mail, text: 'rontudas.chem@gmail.com' },
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
              <h3 className="text-lg font-semibold mb-4 gradient-text-blue">Full Profile</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                I am a PhD researcher in Chemical Engineering at the National Institute of Technology, Raipur, specializing in Molecular Dynamics Simulations, Computational Chemistry, Artificial Intelligence, and Materials Informatics.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                My research focuses on developing AI-assisted molecular simulation frameworks for hydrogels, eutectogels, sustainable solvents, drug delivery systems, and advanced functional materials. I integrate atomistic simulations with machine learning and deep learning to accelerate materials discovery and design.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                With 13+ SCI publications in high-impact journals including ACS, Elsevier, Wiley, and Springer, my work bridges the gap between computational chemistry and practical materials engineering across biomedical, energy, environmental, and food engineering applications.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-card">
              <h3 className="text-lg font-semibold mb-4 gradient-text-blue">Research Journey</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                My research journey began during my M.Tech, where I was first introduced to molecular dynamics simulations and their potential for understanding materials at the atomic level. This sparked a deep interest in computational approaches to materials design.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                During my PhD, I expanded into AI-assisted molecular simulations, developing novel frameworks that combine reservoir computing, machine learning, and deep learning with traditional MD simulations to predict structural and transport properties of complex materials systems.
              </p>
            </div>
          </motion.div>
        </div>

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
                    <p className="text-electric-blue text-sm font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-text-secondary text-xs mb-2">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-text-secondary text-xs">{edu.focus}</p>
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
            Research <span className="gradient-text">Interests</span>
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

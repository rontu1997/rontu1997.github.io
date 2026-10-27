import { expertise } from '../data/positioning';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Atom,
  Brain,
  Wrench,
  MessageSquare,
  Mail,
  GraduationCap,
} from 'lucide-react';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const expertiseIcons: Record<string, typeof Brain> = {
  'Agentic AI': Brain,
  'AI for Science': Atom,
  'Scientific Infrastructure': Wrench,
  'Scientific Computing': Atom,
  'Programming & Machine Learning': Brain,
};

const cards = expertise.map((group) => ({
  ...group,
  icon: expertiseIcons[group.title] ?? Brain,
  gradient: 'from-electric-blue to-purple',
}));

const connectCard = {
  icon: MessageSquare,
  title: "Let's Connect",
  text: 'I am interested in AI for Science, Agentic AI, scientific computing, industrial R&D automation, computational materials science, and opportunities to build intelligent systems that connect AI reasoning with scientific tools.',
  gradient: 'from-magenta to-electric-blue',
  socials: [
    { icon: GithubIcon, href: 'https://github.com/rontu1997', label: 'GitHub' },
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/rontu-das-a7b202164/',
      label: 'LinkedIn',
    },
    { icon: Mail, href: 'mailto:rd.rontu1711@gmail.com', label: 'Email' },
    {
      icon: GraduationCap,
      href: 'https://scholar.google.com/citations?user=oTjA6wcAAAAJ&hl=en&oi=ao',
      label: 'Google Scholar',
    },
  ],
};


const ResearchAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Expertise spanning Agentic AI, scientific computing, molecular simulation, and AI-assisted materials research.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* List-style cards */}
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-card"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,168,255,0.1), rgba(147,51,234,0.1))`,
                  }}
                >
                  <Icon size={18} className="text-electric-blue" />
                </div>
                <h3 className="text-base font-semibold text-white mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-text-secondary"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} shrink-0`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

        </div>

        <div className="mt-8">
          {/* Connect card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-8 hover-card max-w-3xl mx-auto"
            id="contact"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{
                background:
                  'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(0,168,255,0.1))',
              }}
            >
              <connectCard.icon size={18} className="text-magenta" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-4">
              {connectCard.title}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              {connectCard.text}
            </p>
            <div className="flex items-center gap-3">
              {connectCard.socials.map(({ icon: SIcon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-300"
                  aria-label={label}
                >
                  <SIcon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;

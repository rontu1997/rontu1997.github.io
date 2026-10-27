import { homeAbout, aboutGroups } from '../data/positioning';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Connecting Artificial Intelligence with scientific tools, simulations, and industrial R&D
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left — Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-card">
              {/* Profile image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-electric-blue via-deep-blue to-purple opacity-60 blur-sm" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/Profile.png`}
                    alt="Rontu Das"
                    className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-black"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-center mb-1">Rontu Das</h3>
              <p className="text-electric-blue text-sm font-medium text-center mb-6">
                Research Scientist — AI for Science & Scientific Computing
              </p>

              {/* Info */}
              <div className="space-y-3">
                {[
                  { icon: GraduationCap, text: 'Research Scientist' },
                  { icon: MapPin, text: 'Bengaluru, Karnataka, India' },
                  { icon: Mail, text: 'rd.rontu1711@gmail.com' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-electric-blue" />
                    </div>
                    <span className="break-all">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="w-full mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-electric-blue/10 to-purple/10 border border-white/5 text-sm font-medium text-white hover:from-electric-blue/20 hover:to-purple/20 transition-all duration-300"
              >
                Learn More About Me
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right — About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-card">
              <h3 className="text-lg font-semibold mb-4 gradient-text-blue">
                About Me
              </h3>
              {homeAbout.map((paragraph) => (
                <p key={paragraph} className="text-text-secondary text-sm leading-relaxed mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>

            {/* Research highlights — updated content per spec */}
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutGroups.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 hover-card"
                >
                  <div
                    className={`w-8 h-1 rounded-full bg-gradient-to-r from-electric-blue to-purple mb-3`}
                  />
                  <h4 className="text-sm font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <ul className="space-y-1">
                    {item.items.map((text) => (
                      <li
                        key={text}
                        className="flex items-center gap-2 text-xs text-text-secondary"
                      >
                        <span
                          className={`w-1 h-1 rounded-full bg-gradient-to-r from-electric-blue to-purple shrink-0`}
                        />
                        {text}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

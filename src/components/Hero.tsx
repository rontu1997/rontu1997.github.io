import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-blue/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-text-secondary text-sm font-medium tracking-wider uppercase mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="gradient-text">RONTU DAS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg font-medium text-white/80 mb-2"
            >
              Research Scientist | AI for Science | Agentic AI & Scientific Computing
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-sm font-medium gradient-text-blue mb-6"
            >
              Building intelligent systems that connect AI reasoning with scientific computation
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-text-secondary text-sm sm:text-[15px] leading-relaxed mb-4 max-w-xl"
            >
              I develop AI-agent-driven scientific workflows for industrial R&D, connecting large-language-model reasoning with scientific software, knowledge sources, cloud infrastructure, and computational tools.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="text-text-secondary text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl"
            >
              My work combines Artificial Intelligence, Agentic AI, molecular simulation, materials science, and scientific computing to automate complex research workflows and accelerate scientific problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-electric-blue to-deep-blue text-white font-medium text-sm hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href={`${import.meta.env.BASE_URL}CV_Rontu_Das.pdf`}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Image (no floating cards) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main image container */}
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-purple/10 to-magenta/10 rounded-2xl blur-3xl" />

              {/* Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative rounded-2xl overflow-hidden border border-white/5"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/ChatGPT Image Sep 17, 2026, 03_59_57 PM.png`}
                  alt="Scientific computing and AI visualization"
                  className="block w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

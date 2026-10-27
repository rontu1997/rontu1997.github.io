import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  BookOpen,
  Clock,
  Wrench,
  MessageCircle,
  Users,
} from 'lucide-react';

const stats = [
  { icon: BookOpen, value: 13, suffix: '+', label: 'SCI Publications' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years Research Experience' },
  { icon: Wrench, value: 3, suffix: '', label: 'Software Copyrights' },
  { icon: MessageCircle, value: 90, suffix: '+', label: 'Citations' },
  { icon: Users, value: 5, suffix: '+', label: 'Collaborations' },
];

function AnimatedCounter({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="statistics" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Research &amp; Professional <span className="gradient-text">Snapshot</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            A snapshot of my scientific research, software development, and computational R&D experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={
                  isInView ? { opacity: 1, y: 0, scale: 1 } : {}
                }
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card rounded-2xl p-5 text-center hover-card stat-glow pulse-glow-animation"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple/10 flex items-center justify-center mb-3 group-hover:from-electric-blue/20 group-hover:to-purple/20 transition-all duration-300">
                  <Icon
                    size={18}
                    className="text-electric-blue group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    start={isInView}
                  />
                </div>
                <div className="text-text-secondary text-xs font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

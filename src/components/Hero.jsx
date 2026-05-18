import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FloatingRoses, HeartSVG } from './RoseElements';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-softCream">
      {/* Background grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #800020 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,32,0.05)_0%,transparent_70%)]" />

      {/* Floating decorative roses */}
      <FloatingRoses count={6} />

      {/* Main content with parallax */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center flex flex-col items-center px-6"
      >
        {/* Top decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
          className="mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-burgandy/40" />
            <HeartSVG size={20} className="opacity-50 animate-heartbeat" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-burgandy/40" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-base tracking-[0.5em] uppercase text-burgandy/60 font-serif mb-4"
        >
          Feliz cumpleaños, mi amor
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(30px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-8xl md:text-[10rem] leading-none text-burgandy drop-shadow-sm mb-4"
        >
          A'laa
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 1.5, delay: 2 }}
          className="h-[1px] bg-burgandy/30 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="font-arabic text-2xl md:text-4xl text-burgandy/80 max-w-xl leading-relaxed"
          dir="rtl"
        >
          كل سنة وأنتي أحلى حاجة شافتها عيني
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.8 }}
          className="font-serif italic text-lg md:text-xl text-burgandy/50 mt-6 max-w-lg"
        >
          "Every love story is beautiful, but ours is the prittiest"
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <p className="text-burgandy/40 text-xs tracking-[0.3em] font-serif uppercase">
          Scroll to first chapter of our story
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-burgandy rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-burgandy rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

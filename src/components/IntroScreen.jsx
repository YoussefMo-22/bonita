import { motion, AnimatePresence } from 'framer-motion';
import { HeartSVG, RoseSVG } from './RoseElements';

export default function IntroScreen({ onEnter }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9998] bg-softCream flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        {/* Background decorative roses */}
        <motion.div
          className="absolute top-8 left-8 opacity-20"
          animate={{ rotate: [0, 10, -10, 0], y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <RoseSVG size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-12 right-12 opacity-15"
          animate={{ rotate: [0, -15, 15, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <RoseSVG size={100} />
        </motion.div>
        <motion.div
          className="absolute top-20 right-16 opacity-10"
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <RoseSVG size={50} />
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-16 opacity-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <RoseSVG size={60} />
        </motion.div>

        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,32,0.06)_0%,transparent_70%)]" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-6 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Heartbeat animation */}
          <motion.div
            className="mb-4"
            animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HeartSVG size={60} className="drop-shadow-lg" />
          </motion.div>

          <motion.p
            className="text-burgundy/60 text-sm tracking-[0.4em] uppercase font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A Love Letter For
          </motion.p>

          <motion.h1
            className="font-script text-7xl md:text-9xl text-burgundy drop-shadow-sm"
            initial={{ opacity: 0, scale: 0.6, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
          >
            A'laa
          </motion.h1>

          <motion.p
            className="font-arabic text-3xl md:text-4xl text-burgundy/80 mt-2"
            dir="rtl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            حبيبتي
          </motion.p>

          {/* Enter button */}
          <motion.button
            onClick={onEnter}
            className="mt-10 group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-burgundy rounded-full animate-ping opacity-20" />
            <span className="relative flex items-center gap-3 px-10 py-4 bg-burgundy text-softCream rounded-full font-serif text-lg tracking-widest shadow-2xl shadow-burgundy/30 group-hover:shadow-burgundy/50 transition-shadow duration-500">
              <HeartSVG size={28} className="fill-softCream" />
              <span>Open My Heart</span>
              <HeartSVG size={28} className="fill-softCream" />
            </span>
          </motion.button>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <p className="text-burgundy/30 text-xs tracking-widest font-serif">Made with love</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HeartSVG } from './RoseElements';

export default function StorySection({ imageBase, quoteEn, quoteAr, index, chapterTitle }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const scaleImage = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92]);
  const rotateImage = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      {/* Alternating subtle background */}
      {index % 2 === 1 && (
        <div className="absolute inset-0 bg-gradient-to-b from-softCream-dark/40 via-softCream to-softCream-dark/40" />
      )}

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-burgandy/10 rounded-tl-xl" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-burgandy/10 rounded-br-xl" />

      <div className={`relative z-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 w-full max-w-7xl`}>

        {/* ─── Image Composition ─── */}
        <motion.div
          style={{ y: yImage, scale: scaleImage, rotate: rotateImage }}
          className="relative w-full md:w-[45%] flex-shrink-0"
        >
          {/* Background image — framed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(128,0,32,0.15)]"
          >
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-[40px] border-2 border-burgandy/10 z-20 pointer-events-none" />

            {/* Main image */}
            <img
              src={`/images/${imageBase}`}
              alt="A'laa"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-burgandy/20 via-transparent to-transparent" />

            {/* Chapter number watermark */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-softCream/80 backdrop-blur-sm flex items-center justify-center z-20">
              <span className="font-serif text-burgandy text-sm font-semibold">{String(index + 1).padStart(2, '0')}</span>
            </div>
          </motion.div>

          {/* Floating cutout image — adds depth */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className={`absolute ${isEven ? '-right-6 md:-right-12' : '-left-6 md:-left-12'} -bottom-6 md:-bottom-10 w-[55%] z-30 pointer-events-none drop-shadow-[0_15px_30px_rgba(128,0,32,0.25)]`}
          >
            {/* <img
              src={`/images/${imageBase}-removebg-preview.png`}
              alt="A'laa"
              className="w-full h-auto"
              loading="lazy"
            /> */}
          </motion.div>

          {/* Decorative rose petal accent */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 0.15, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className={`absolute ${isEven ? '-left-8 top-12' : '-right-8 top-12'} text-burgandy`}
          >
            <HeartSVG size={35} />
          </motion.div>
        </motion.div>

        {/* ─── Text Content ─── */}
        <motion.div
          style={{ y: yText }}
          className={`w-full md:w-[50%] flex flex-col ${isEven ? 'items-start text-left' : 'items-end text-right'} gap-6`}
        >
          {/* Chapter title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-2"
          >
            <div className="w-8 h-[1px] bg-burgandy/30" />
            <span className="text-xs tracking-[0.4em] uppercase text-burgandy/50 font-serif">
              {chapterTitle}
            </span>
          </motion.div>

          {/* English quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="font-script text-3xl md:text-5xl lg:text-6xl text-burgandy leading-[1.3] mb-2">
              {quoteEn}
            </p>
          </motion.div>

          {/* Thin divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-[1px] bg-burgandy/25 ${isEven ? '' : 'self-end'}`}
          />

          {/* Arabic quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="w-full"
          >
            <p className="font-arabic text-3xl md:text-4xl lg:text-5xl text-burgandy/80 leading-[1.6]" dir="rtl">
              {quoteAr}
            </p>
          </motion.div>

          {/* Small heart accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            className={`mt-2 ${isEven ? '' : 'self-end'}`}
          >
            <HeartSVG size={16} className="opacity-30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HeartSVG, RoseSVG, FloatingRoses } from './RoseElements';

export default function LoveLetterFinale() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={ref} className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-gradient-to-b from-softCream via-softCream to-burgandy/[0.04]">
      {/* Decorative roses */}
      <FloatingRoses count={4} />

      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,32,0.04)_0%,transparent_60%)]" />

      {/* Love letter card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full"
      >
        {/* Card */}
        <div className="relative bg-softCream-light/80 backdrop-blur-sm rounded-3xl border border-burgandy/10 p-10 md:p-16 shadow-[0_40px_100px_rgba(128,0,32,0.08)]">
          {/* Decorative top corner */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-burgandy/15 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-burgandy/15 rounded-br-3xl" />

          {/* Heart at top */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartSVG size={40} className="drop-shadow-md" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-arabic text-4xl md:text-5xl text-burgandy text-center mb-10"
          >
            حبيبتي ألاء
          </motion.h2>

          {/* Letter content */}
          <div className="space-y-6">
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-burgandy/80 text-lg leading-relaxed text-center"
            >
              On this beautiful day, the world became a better place because you were born into it.
              Every moment with you is a gift I treasure more than words could ever express.
            </motion.p> */}

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-serif text-burgandy/80 text-lg leading-relaxed text-center"
            >
              You are the poem I never knew how to write, the song I never knew how to sing,
              and the dream I never wanted to wake up from.
            </motion.p> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-arabic text-3xl md:text-4xl text-burgandy/80 text-center leading-relaxed mt-8"
              dir="rtl"
            >
              عايز اقولك بجد اني عمري ما فكرت اني احب ولا اني اتخيل حد يحبني عشان كده حياتي كانت ملهاش طعم وقلبي بقى جاف ولا في شغف ان الواحد يعمل حاجة <br /> بس يوم 11 فبراير لما شوفتك ساعتها حسيت باحساس عمري ما فكرت اني احسه تاني ومن بعدها بقيت بتيجي علطول في دماغي ومهتم اني اعرف عنك ومستني أي رسالة منك وكان جوايا في صراع ما بين قلبي اللي نفسه يحب بجد ولا عقلي اللي شايف انها مستحيل وقلقان وميقدرش على ده <br /> عشان كده كان ممكن تشوفيني بعاملك بطريقة غريبة وده عشان كنت بهرب اني احبك ومش عايز قلبي يتعلق بيكي بس لما قربنا لقيت ان حياتي بقت فيها حاجة مهمة الواحد بيستناها كل يوم بس عشان يكلمها وبقى نفسه يقعد معاه اليوم كله و مش فارق معاه نوم ولا شغل ولما حسيت فعلا انك ممكن تحبيني وان فعلا ممكن اتحب بجد وابقى مهم عنده ف عملت اللي عمري فكرت انه اعمله وافكر اني اقولها كنت دايما خايف لاقولها لاتجرح واندم اني قولتها <br /> بس انتي كان كل حاجة فيا عايزاني اقولها <br /> بحبك يا آلاء<br /> وبجد بدعي من ربنا ميحرمنيش منك ابدا وحقك عليا انا عارف اني بضايقك كتير بس والله مستعد اتغير عشان تبقى معايا ومخسركيش بجد عايزك تبقي معايا طول عمري.<br /> كل سنة وانتي معايا حبيبتي و شريكة حياتي وتحققي اللي نفسك فيه واحنا مع بعض يارب. <br /> بحبك
            </motion.p>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <p className="font-arabic text-burgandy text-xl">يوسف</p>
            <div className="w-16 h-[1px] bg-burgandy/20 mb-4" />
            <p className="font-serif italic text-burgandy/60 text-sm">Forever & Always Yours</p>
            <div className="flex items-center gap-2 mt-2">
              <HeartSVG size={14} className="opacity-40" />
              <HeartSVG size={18} className="opacity-60" />
              <HeartSVG size={14} className="opacity-40" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-24 flex flex-col items-center gap-6 text-center"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-burgandy/20" />
          <RoseSVG size={40} className="opacity-40 animate-gentle-sway" />
          <div className="w-12 h-[1px] bg-burgandy/20" />
        </div>

        <motion.p
          className="shimmer-text font-arabic text-5xl md:text-6xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          بحبك
        </motion.p>

        <p className="font-serif text-burgandy/40 text-sm tracking-widest">
          Happy Birthday, my beautiful A'laa ❤️
        </p>

        <p className="font-serif text-burgandy text-xs mt-8 tracking-wider">
          Made with all my love - Tu amor, Youssef ❤️
        </p>
      </motion.footer>
    </section>
  );
}

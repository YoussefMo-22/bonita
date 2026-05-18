import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import LoveLetterFinale from './components/LoveLetterFinale';
import AudioPlayer from './components/AudioPlayer';
import FloatingPetals from './components/FloatingPetals';
import { RoseDivider } from './components/RoseElements';

const storyData = [
  {
    id: 1,
    imageBase: 'FB_IMG_1779127690478.jpg',
    quoteEn: 'In all the world, there is no heart for me like yours.',
    quoteAr: 'أول مرة شوفتك فيها حسيت أني لقيت حاجة اللي عمري كله بيدور عليها',
    chapterTitle: 'Chapter One — First Sight',
  },
  {
    id: 2,
    imageBase: 'IMG_20260518_211212.jpg',
    quoteEn: 'ُEvery moment with you is a gift.',
    quoteAr: 'كل ثانية بقضيه معاكِ بحس انك هدية من ربنا ليا.',
    chapterTitle: 'Chapter Two — Falling Deep',
  },
  {
    id: 3,
    imageBase: 'IMG-20260507-WA0041.jpg',
    quoteEn: 'I look at you and see the rest of my life in front of my eyes.',
    quoteAr: 'أنتي اللي مبقاش فارق معايا اي حاجة غير اني اكون معاكي أنتي بس',
    chapterTitle: 'Chapter Three — You Are My Light',
  },
  {
    id: 4,
    imageBase: 'IMG_20260518_211108.jpg',
    quoteEn: 'You are my today and all of my tomorrows.',
    quoteAr: 'أنتي الشخص اللي مستعد اكون معاه ل اخر يوم في عمري.',
    chapterTitle: 'Chapter Four — Beautiful Destiny',
  },
  {
    id: 5,
    imageBase: 'IMG_20260518_211131.jpg',
    quoteEn: 'I didn\'t choose to love you. My heart did.',
    quoteAr: 'بصيت في عينيكي مرة واحدة ومن ساعتها وانتي بقيتي كل دنيتي .',
    chapterTitle: 'Chapter Five — Forever Yours',
  },
];

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="bg-softCream text-burgandy min-h-screen overflow-x-hidden">
      {/* Intro Gate */}
      <AnimatePresence mode="wait">
        {!entered && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
          >
            <IntroScreen onEnter={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content — only renders after entering */}
      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {/* Floating rose petals across entire page */}
          <FloatingPetals />

          {/* Audio player */}
          <AudioPlayer />

          {/* Hero Section */}
          <Hero />

          {/* Story Sections */}
          <div className="flex flex-col">
            {storyData.map((item, index) => (
              <div key={item.id}>
                {index > 0 && <RoseDivider />}
                <StorySection
                  index={index}
                  imageBase={item.imageBase}
                  quoteEn={item.quoteEn}
                  quoteAr={item.quoteAr}
                  chapterTitle={item.chapterTitle}
                />
              </div>
            ))}
          </div>

          {/* Rose divider before finale */}
          <RoseDivider />

          {/* Grand Finale */}
          <LoveLetterFinale />
        </motion.div>
      )}
    </div>
  );
}

export default App;

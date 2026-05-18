import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef(null);

  // Handle Autoplay and Prompt timing on mount
  useEffect(() => {
    // 1. Attempt to play the audio automatically
    if (audioRef.current) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay was successful
            setIsPlaying(true);
            setShowPrompt(false);
          })
          .catch((error) => {
            // Autoplay was prevented by the browser (user hasn't interacted with the page yet)
            console.log("Autoplay prevented by browser policy. Waiting for user interaction.");
            setIsPlaying(false);

            // 2. Since autoplay failed, show the prompt after a short delay
            const timer = setTimeout(() => setShowPrompt(true), 100);
            return () => clearTimeout(timer);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      setShowPrompt(false);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop src="/bg-music.mp3" preload="auto" />

      {/* Floating music button */}
      <motion.button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-[10000] w-14 h-14 bg-burgandy rounded-full flex items-center justify-center shadow-2xl border-2 border-burgandy-300/30 group"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {/* Pulse ring when not playing */}
        {!isPlaying && (
          <span className="absolute inset-0 rounded-full bg-burgandy/40 animate-ping" />
        )}

        {/* Spinning disc animation when playing */}
        {isPlaying ? (
          <motion.svg
            width="24" height="24" viewBox="0 0 24 24"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <circle cx="12" cy="12" r="10" stroke="#F9F5F0" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="12" r="3" fill="#F9F5F0" />
            <circle cx="12" cy="5" r="1.5" fill="#F9F5F0" opacity="0.5" />
          </motion.svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#F9F5F0">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        )}
      </motion.button>

      {/* Prompt tooltip */}
      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-8 right-24 z-[10000] bg-burgandy text-softCream px-4 py-2 rounded-xl text-sm font-serif shadow-xl"
          >
            🎵 Play our song
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-burgandy rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function GifCard() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="gif-section bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl w-full"
    >
      <ImageWithFallback
        src="https://img.freepik.com/free-vector/romantic-valentines-day-elements-doodle-style_23-2147533086.jpg"
        alt="Romantic couple illustration"
        className="w-full aspect-square object-cover rounded-xl sm:rounded-2xl max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto"
      />
    </motion.div>
  );
}

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface ThankYouTextProps {
  name?: string;
}

export function ThankYouText({ name }: ThankYouTextProps) {
  const heartVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="thank-you-text text-center space-y-4 sm:space-y-6">
      <motion.div
        variants={heartVariants}
        animate="float"
        className="flex justify-center"
      >
        <Heart className="text-rose-500 fill-rose-500 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
      </motion.div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-600">
        Yay{name ? ` ${name}` : ''}! 💖
      </h1>
      
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-600 px-4">
        Thank you for saying YES!
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center gap-2 sm:gap-3"
      >
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.5,
              delay: i * 0.1 + 0.7,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="text-2xl sm:text-3xl"
          >
            {['💖', '✨', '💕', '✨', '💖'][i]}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
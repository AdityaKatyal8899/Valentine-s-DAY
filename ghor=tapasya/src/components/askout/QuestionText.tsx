import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface QuestionTextProps {
  name?: string;
}

export function QuestionText({ name }: QuestionTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="question-text text-center space-y-4"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-600 leading-tight px-4">
        {name ? (
          <>
            Hey {name} 💕
            <br />
            Momos?
          </>
        ) : (
          'Will you go on a date with me? 💕'
        )}
      </h1>
      
      <div className="flex justify-center gap-2 sm:gap-3">
        <Heart 
          className="text-pink-500 fill-pink-500 animate-pulse w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
        />
        <Heart 
          className="text-rose-500 fill-rose-500 animate-pulse w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
          style={{ animationDelay: '0.2s' }} 
        />
        <Heart 
          className="text-pink-500 fill-pink-500 animate-pulse w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
          style={{ animationDelay: '0.4s' }} 
        />
      </div>
    </motion.div>
  );
}
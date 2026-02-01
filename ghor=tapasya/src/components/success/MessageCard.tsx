import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ReactNode } from 'react';

interface MessageCardProps {
  children: ReactNode;
}

export function MessageCard({ children }: MessageCardProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
      className="message-card bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl w-full relative z-10"
    >
      {/* Sparkle decoration */}
      <motion.div
        className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="text-yellow-400 fill-yellow-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      </motion.div>

      {children}
    </motion.div>
  );
}

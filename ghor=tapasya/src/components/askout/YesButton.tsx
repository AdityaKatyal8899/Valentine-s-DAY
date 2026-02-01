import { motion } from 'motion/react';

interface YesButtonProps {
  onClick: () => void;
}

export function YesButton({ onClick }: YesButtonProps) {
  return (
    <motion.button
      id="yes-button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:from-pink-600 hover:to-rose-600 min-w-[140px] sm:min-w-[160px] touch-manipulation active:shadow-inner"
      style={{ minHeight: '40px' }}
    >
      YES 💘
    </motion.button>
  );
}

import { motion } from 'motion/react';

interface ContinueButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function ContinueButton({ onClick, disabled }: ContinueButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`w-full px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg transition-all duration-300 touch-manipulation ${
        disabled
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-2xl hover:from-pink-600 hover:to-rose-600'
      }`}
      style={{ minHeight: '48px' }}
    >
      Continue 💌
    </motion.button>
  );
}

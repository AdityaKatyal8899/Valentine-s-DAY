import { motion } from 'motion/react';

interface NoButtonProps {
  onHover: () => void;
  isRepositioned: boolean;
  position: { top: number; left: number };
}

export function NoButton({ onHover, isRepositioned, position }: NoButtonProps) {
  return (
    <motion.button
      id="no-button"
      onMouseEnter={onHover}
      onTouchStart={onHover}
      className={`px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gray-300 text-gray-600 text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg cursor-not-allowed min-w-[140px] sm:min-w-[160px] touch-manipulation select-none ${
        isRepositioned ? 'fixed z-50' : 'relative'
      }`}
      style={
        isRepositioned
          ? { 
              top: `${position.top}px`, 
              left: `${position.left}px`,
              minHeight: '44px'
            }
          : { minHeight: '44px' }
      }
      onClick={(e) => e.preventDefault()}
      whileHover={!isRepositioned ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      NO 😜
    </motion.button>
  );
}

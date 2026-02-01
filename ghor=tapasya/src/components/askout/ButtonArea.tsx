import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonAreaProps {
  children: ReactNode;
}

export function ButtonArea({ children }: ButtonAreaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="button-group relative w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 min-h-[100px] sm:min-h-[80px]"
    >
      {children}
    </motion.div>
  );
}

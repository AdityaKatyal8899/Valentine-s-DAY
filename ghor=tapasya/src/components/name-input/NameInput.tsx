import { motion } from 'motion/react';

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NameInput({ value, onChange }: NameInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="w-full"
    >
      <input
        id="name-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your name"
        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl text-gray-800 placeholder-gray-400 bg-white border-2 border-pink-200 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all duration-300 text-center touch-manipulation"
        style={{ minHeight: '48px' }}
        autoComplete="off"
        autoFocus
      />
    </motion.div>
  );
}

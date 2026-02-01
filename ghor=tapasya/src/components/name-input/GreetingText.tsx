import { motion } from 'motion/react';

export function GreetingText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="greeting-text text-center space-y-2 sm:space-y-3"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-600">
        Hey there 💖
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl text-pink-600 font-medium">
        What's your name?
      </p>
    </motion.div>
  );
}

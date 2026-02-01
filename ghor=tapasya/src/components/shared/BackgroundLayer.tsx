import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BackgroundLayerProps {
  variant?: 'askout' | 'success';
  children: ReactNode;
}

export function BackgroundLayer({ variant = 'askout', children }: BackgroundLayerProps) {
  const gradients = {
    askout: 'from-pink-200 via-rose-200 to-pink-300',
    success: 'from-rose-300 via-pink-300 to-purple-300'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen w-full bg-gradient-to-br ${gradients[variant]} relative overflow-hidden`}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse pointer-events-none" 
           style={{ animationDuration: '4s' }} 
      />
      
      {/* Safe area padding for mobile devices */}
      <div className="min-h-screen w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
        {children}
      </div>
    </motion.div>
  );
}

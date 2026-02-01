import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ParticleLayer() {
  useEffect(() => {
    // Trigger confetti on component mount
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Launch confetti from two different angles
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#C71585']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#C71585']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating hearts background decoration */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1440, 
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 900,
            opacity: 0.2 
          }}
          animate={{ 
            y: -100,
            transition: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }
          }}
        >
          <Heart 
            className="text-pink-400 fill-pink-400" 
            size={Math.random() * 20 + 15} 
          />
        </motion.div>
      ))}
    </div>
  );
}

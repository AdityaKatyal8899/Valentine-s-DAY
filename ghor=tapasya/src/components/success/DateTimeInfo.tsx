import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

export function DateTimeInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="date-time-info mt-8 sm:mt-10 space-y-4"
    >
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <Calendar className="text-rose-500 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 mt-0.5 sm:mt-0" />
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-rose-600 text-sm sm:text-base md:text-lg block sm:inline">Date:</span>
            <span className="ml-0 sm:ml-2 text-gray-600 italic text-sm sm:text-base md:text-lg block sm:inline break-words">
              1/2/26 ✨
            </span>
          </div>
        </div>
        
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <Clock className="text-rose-500 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 mt-0.5 sm:mt-0" />
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-rose-600 text-sm sm:text-base md:text-lg block sm:inline">Time:</span>
            <span className="ml-0 sm:ml-2 text-gray-600 italic text-sm sm:text-base md:text-lg block sm:inline break-words">
            Text me! ..✨
            </span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm text-gray-500 italic mt-4 sm:mt-6 px-4">
        I can't wait! This is going to be amazing! 💝
      </p>
    </motion.div>
  );
}

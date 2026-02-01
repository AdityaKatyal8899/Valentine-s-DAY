import { useState } from 'react';
import { motion } from 'motion/react';
import { BackgroundLayer } from './shared/BackgroundLayer';
import { ContentWrapper } from './shared/ContentWrapper';
import { GreetingText } from './name-input/GreetingText';
import { NameInput } from './name-input/NameInput';
import { ContinueButton } from './name-input/ContinueButton';

interface NameInputPageProps {
  onContinue: (name: string) => void;
}

export function NameInputPage({ onContinue }: NameInputPageProps) {
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim()) {
      onContinue(name.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && name.trim()) {
      handleContinue();
    }
  };

  return (
    <BackgroundLayer variant="askout">
      <div className="flex items-center justify-center min-h-full">
        <ContentWrapper className="max-w-[420px] sm:max-w-[500px] lg:max-w-[540px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6 sm:space-y-8"
            onKeyPress={handleKeyPress}
          >
            {/* Greeting Text */}
            <GreetingText />

            {/* Name Input Field */}
            <NameInput value={name} onChange={setName} />

            {/* Continue Button */}
            <ContinueButton 
              onClick={handleContinue} 
              disabled={!name.trim()} 
            />

            {/* Developer Note */}
            <div className="developer-note mt-6 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
              <p className="text-[10px] sm:text-xs text-blue-600 leading-relaxed text-center">
                💡 <strong>Dev Note:</strong> Name stored using React state and passed down as props. Can be refactored to use Context API for larger apps.
              </p>
            </div>
          </motion.div>
        </ContentWrapper>
      </div>
    </BackgroundLayer>
  );
}

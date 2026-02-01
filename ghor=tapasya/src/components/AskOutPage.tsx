import { useState } from 'react';
import { BackgroundLayer } from './shared/BackgroundLayer';
import { ContentWrapper } from './shared/ContentWrapper';
import { GifCard } from './askout/GifCard';
import { QuestionText } from './askout/QuestionText';
import { ButtonArea } from './askout/ButtonArea';
import { YesButton } from './askout/YesButton';
import { NoButton } from './askout/NoButton';

interface AskOutPageProps {
  onYesClick: () => void;
  name?: string;
}

export function AskOutPage({ onYesClick, name }: AskOutPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isNoButtonRepositioned, setIsNoButtonRepositioned] = useState(false);

  const handleNoButtonHover = () => {
    // Generate random position within safe viewport bounds
    // Account for button size and safe margins
    const buttonWidth = 160;
    const buttonHeight = 60;
    const safeMargin = 20;
    
    const maxX = window.innerWidth - buttonWidth - safeMargin;
    const maxY = window.innerHeight - buttonHeight - safeMargin;
    const minX = safeMargin;
    const minY = safeMargin + 60; // Extra top margin to avoid covering header area

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    setNoButtonPosition({ top: randomY, left: randomX });
    setIsNoButtonRepositioned(true);
  };

  return (
    <BackgroundLayer variant="askout">
      <div className="flex items-center justify-center min-h-full">
        <ContentWrapper className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10">
          {/* GIF Section with float animation */}
          <GifCard />

          {/* Question Text with responsive typography and personalized name */}
          <QuestionText name={name} />

          {/* Button Area - stacks on mobile, horizontal on tablet/desktop */}
          <ButtonArea>
            <YesButton onClick={onYesClick} />
            <NoButton
              onHover={handleNoButtonHover}
              isRepositioned={isNoButtonRepositioned}
              position={noButtonPosition}
            />
          </ButtonArea>

          {/* Developer Note */}
          <div className="developer-note mt-6 sm:mt-8 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg max-w-md w-full">
            <p className="text-xs sm:text-sm text-gray-600 italic text-center leading-relaxed">
              💡 <strong>Dev Note:</strong> NO button uses React state to randomly reposition within safe viewport bounds. Detects device interaction using both onMouseEnter (desktop) and onTouchStart (mobile). Always non-clickable.
            </p>
          </div>
        </ContentWrapper>
      </div>
    </BackgroundLayer>
  );
}
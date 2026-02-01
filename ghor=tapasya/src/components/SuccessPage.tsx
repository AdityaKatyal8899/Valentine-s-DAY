import { BackgroundLayer } from './shared/BackgroundLayer';
import { ContentWrapper } from './shared/ContentWrapper';
import { ParticleLayer } from './success/ParticleLayer';
import { MessageCard } from './success/MessageCard';
import { ThankYouText } from './success/ThankYouText';
import { DateTimeInfo } from './success/DateTimeInfo';

interface SuccessPageProps {
  name?: string;
}

export function SuccessPage({ name }: SuccessPageProps) {
  return (
    <BackgroundLayer variant="success">
      {/* Particle & Confetti Layer - full screen overlay with pointer-events disabled */}
      <ParticleLayer />

      <div className="flex items-center justify-center min-h-full">
        <ContentWrapper className="max-w-[420px] sm:max-w-[600px] lg:max-w-[720px]">
          <MessageCard>
            {/* Thank You Text with animated emoji and personalized name */}
            <ThankYouText name={name} />

            {/* Date & Time Info with responsive typography */}
            <DateTimeInfo />

            {/* Developer Notes */}
            <div className="space-y-3 mt-6 sm:mt-8">
              <div className="particle-effect p-2.5 sm:p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                <p className="text-[10px] sm:text-xs text-blue-600 leading-relaxed">
                  🎊 <strong>Particle Effect:</strong> Confetti and hearts triggered on component mount using canvas-confetti. Full-screen overlay with pointer-events disabled.
                </p>
              </div>

              <div className="sound-effect p-2.5 sm:p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
                <p className="text-[10px] sm:text-xs text-purple-600 leading-relaxed">
                  🔊 <strong>Sound Effect:</strong> Play cute pop/celebration sound on page load (requires user interaction for browser autoplay policy).
                </p>
              </div>
            </div>
          </MessageCard>
        </ContentWrapper>
      </div>
    </BackgroundLayer>
  );
}
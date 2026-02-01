import { ReactNode } from 'react';

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ContentWrapper({ children, className = '' }: ContentWrapperProps) {
  return (
    <div className={`w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[720px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

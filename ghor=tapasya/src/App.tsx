import { useState } from 'react';
import { NameInputPage } from './components/NameInputPage';
import { AskOutPage } from './components/AskOutPage';
import { SuccessPage } from './components/SuccessPage';

type Screen = 'name-input' | 'askout' | 'success';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('name-input');
  const [userName, setUserName] = useState<string>('');

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setCurrentScreen('askout');
  };

  const handleYesClick = () => {
    setCurrentScreen('success');
  };

  return (
    <div className="w-full min-h-screen">
      {currentScreen === 'name-input' && (
        <NameInputPage onContinue={handleNameSubmit} />
      )}
      {currentScreen === 'askout' && (
        <AskOutPage onYesClick={handleYesClick} name={userName} />
      )}
      {currentScreen === 'success' && (
        <SuccessPage name={userName} />
      )}
    </div>
  );
}
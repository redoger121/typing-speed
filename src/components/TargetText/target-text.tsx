import { FC, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export const TargetText: FC = () => {
  const { targetText, inputText } = useContext(GlobalContext);

  const showMistakes = () => {
    return targetText?.split('').map((letter, index) => {
      let color;
      if (index < inputText.length) {
        color = letter === inputText[index] ? 'green' : 'red';
      }
      return (
        <span key={index} style={{ color: color }}>
          {letter}
        </span>
      );
    });
  };

  return (
    <div className="text-[#646669] p-1 border rounded-md font-medium sm:text-2xl select-none">
      <p>{showMistakes()}</p>
    </div>
  );
};

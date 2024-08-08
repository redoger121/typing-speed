import { FC, ReactNode, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [targetText, setTargetText] = useState<string>(
    'Diam amet nonumy sed rebum rebum invidunt accusam et at rebum, dolore amet ipsum labore ea takimata at clita erat,.'
  );
  const [inputText, setInputText] = useState<string>('');
  const [errors, setErrors] = useState<number>(0);
  const [startTime, setStartTime] = useState<null | Date>(null);
  const [endTime, setEndTime] = useState<null | Date>(null);

  return (
    <GlobalContext.Provider
      value={{
        targetText,
        setTargetText,
        inputText,
        setInputText,
        errors,
        setErrors,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

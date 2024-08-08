import { createContext } from 'react';
type ContextType = {
  targetText: string;
  inputText: string;
  errors: number;
  startTime: null | Date;
  endTime: null | Date;
  setEndTime: (date: Date|null) => void;
  setTargetText: (text: string) => void;
  setInputText: (text: string) => void;
  setErrors: (error: number) => void;
  setStartTime: (date: Date) => void;
};

const initialState: ContextType = {
  targetText: '',
  inputText: '',
  errors: 0,
  startTime: null,
  endTime: null,
  setTargetText: () => {},
  setInputText: () => {},
  setErrors: () => {},
  setStartTime: () => {},
  setEndTime: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

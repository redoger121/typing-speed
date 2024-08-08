import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export const InputText = () => {
  const {
    inputText,
    targetText,
    errors,
    setInputText,
    setStartTime,
    setErrors,
    setEndTime,
  } = useContext(GlobalContext);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputText.length === targetText.length) {
      setIsDisabled(true);
      setEndTime(new Date());
    }
    if (!inputText.length) {
      console.log(inputText);
      setIsDisabled(false);
      if (!isDisabled) {
        inputRef.current?.focus();
      }
    }
  }, [inputText, isDisabled]);

  const handleTextInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!inputText) setStartTime(new Date());

    const inputValue = e.target.value;

    if (
      inputValue[inputValue.length - 1] !== targetText[inputValue.length - 1]
    ) {
      setErrors(errors + 1);
    }
    setInputText(e.target.value);
  };

  return (
    <div className="w-full">
      <textarea
        className="mt-3 w-full  resize-y min-h-16 border-2  border-slate-300 rounded-md   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        ref={inputRef}
        value={inputText}
        disabled={isDisabled}
        placeholder="печатать тут"
        maxLength={targetText.length}
        onChange={handleTextInput}
      />
    </div>
  );
};

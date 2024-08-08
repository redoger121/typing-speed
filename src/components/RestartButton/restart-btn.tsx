import { FC, useContext } from 'react';
import { Button } from '../UI';
import { GlobalContext } from '../../contexts/GlobalContext';

export const RestartBtn: FC = () => {
  const { setErrors, setEndTime, setInputText, setStartTime } =
    useContext(GlobalContext);

  const handleBtnClick = () => {
    setErrors(0);
    setEndTime(null);
    setInputText('');
    setStartTime(new Date());
  };

  return <Button onClick={handleBtnClick} value="restart" bgColor="red" />;
};

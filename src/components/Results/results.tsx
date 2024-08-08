import { FC, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export const Results: FC = () => {
  const { errors, startTime, endTime, targetText } = useContext(GlobalContext);

  const wpm = Math.round(
    targetText.split(/\s+/).length /
      ((endTime!.getTime() - startTime!.getTime()) / 1000 / 60)
  );

  return (
    <div className="mb-2">
      <p className="font-medium sm:text-2xl text-[#646669] ">
        Допушено ошибок: {errors}
      </p>
      <p className="text-[#646669] font-medium sm:text-2xl">
        Скорость печати (слов в минуту) {wpm}
      </p>
    </div>
  );
};

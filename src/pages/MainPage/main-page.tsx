import { FC, useContext } from 'react';
import { InputText, RestartBtn, Results, TargetText } from '../../components';
import { GlobalContext } from '../../contexts/GlobalContext';

export const MainPage: FC = () => {
  const { endTime } = useContext(GlobalContext);

  return (
    <div className="mx-auto max-w-[800px] mt-3">
      <TargetText />
      <InputText />

      {endTime && (
        <>
          <Results />
          <RestartBtn />
        </>
      )}
    </div>
  );
};

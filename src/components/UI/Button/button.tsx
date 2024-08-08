import { FC } from 'react';

type Props = {
  value: string;
  bgColor: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ value, onClick, bgColor }) => {
  return (
    <button
      className="p-1 rounded  w-full"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}>
      {value}
    </button>
  );
};

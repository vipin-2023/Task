// import { FC,MouseEvent } from 'react';
// import './button.css';

// interface ButtonProps {
//   text: string;
//   isFilled?: boolean;
//   onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
//   type?: 'button' | 'submit' | 'reset'; 
// }

// const Button: FC<ButtonProps> = ({ text, isFilled = true ,onClick, type = 'button' }) => {
//   return (
//     <button
//     type={type}
//       className={isFilled ? 'fill-button' : 'outlined-button'}
//       onClick={onClick}>
//       {text}
//     </button>
//   );
// };

// export default Button;

import React, { FC, MouseEvent } from 'react';
import './button.css';

interface ButtonProps {
  text: string;
  isFilled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  isShining?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  isFilled = true,
  onClick,
  type = 'button',
  isShining = false,
}) => {
  return (
    <button
      type={type}
      className={`${isFilled ? 'fill-button' : 'outlined-button'} ${
        isFilled && isShining ? 'shining-animation' : ''
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

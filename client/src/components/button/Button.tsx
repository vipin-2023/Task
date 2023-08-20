import { FC,MouseEvent } from 'react';
import './button.css';

interface ButtonProps {
  text: string;
  isFilled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset'; 
}

const Button: FC<ButtonProps> = ({ text, isFilled = true ,onClick, type = 'button' }) => {
  return (
    <button
    type={type}
      className={isFilled ? 'fill-button' : 'outlined-button'}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

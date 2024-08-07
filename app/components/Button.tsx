import React from 'react';

interface ButtonProps {
  styles?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ styles, children, onClick }) => (
  <button onClick={onClick} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
    {children}
  </button>
);

export default Button;

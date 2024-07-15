import React, { ReactElement } from 'react';

// import cx from 'classnames';
import { Loader } from '../index';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactElement;
  variant?: 'primary' | 'neutral' | 'tertiary' | 'success' | 'red';
  icon?: any;
  iconAfter?: any;
  loading?: boolean;
}

const variants = {
  primary:
    'bg-primary-100 hover:opacity-85 border-primary-100 hover:border-primary-100 text-black !rounded-md',
  neutral:
    'bg-white hover:opacity-85 border border-primary-100 hover:border-primary-100 text-primary-100 !rounded-md',
  tertiary: 'bg-primary-200 hover:opacity-85 text-black',
  success: 'bg-green-500',
  red: 'bg-red-500 text-white',
};

const Button: React.FC<ButtonProps> = ({
  label,
  className = '',
  variant = 'primary',
  icon,
  iconAfter,
  type = 'button',
  loading,
  ...props
}) => {
  return (
    <button
      disabled={loading}
      type={type}
      className={`
      px-3 py-2 md:px-6 md:py-3 max-h-fit w-fit font-manrope 
      !rounded-md font-semibold text-sm  shadow-buttonShadow hover:opacity-85 ${
        loading ? 'cursor-progress opacity-85' : ''
      } ${variants[variant]} ${className} ${
        icon || iconAfter || loading
          ? 'flex gap-2 justify-center items-center'
          : ''
      }`}
      {...props}
    >
      {loading ? <Loader /> : null}
      {icon ? icon : null}
      {label}
      {iconAfter ? iconAfter : null}
    </button>
  );
};

export default Button;

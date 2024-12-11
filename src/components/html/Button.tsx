import React from 'react';

type ButtonProps = {
  varient: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;
const CustomButton = ({ varient, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${varient}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;

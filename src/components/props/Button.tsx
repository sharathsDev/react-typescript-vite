import { ButtonProps } from '../../types/componentTypes';

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={(event) => props.handleClick(event, 1)}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      change
    </button>
  );
};

export default Button;

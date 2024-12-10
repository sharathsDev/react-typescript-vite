import { InputProps } from '../../types/componentTypes';

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default Input;

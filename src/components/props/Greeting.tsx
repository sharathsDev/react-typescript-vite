import { GreetProps } from '../../types/componentTypes';

const Greeting = (props: GreetProps) => {
  return (
    <div className="text-red-300">
      <h2>{props.isLoggedIn ? `Welcome ${props.name}!` : 'Welcome Guest'}</h2>
    </div>
  );
};

export default Greeting;

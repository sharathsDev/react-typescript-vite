import { HeadingProps } from '../../types/componentTypes';

const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;

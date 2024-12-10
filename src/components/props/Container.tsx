import { ContainerProps } from '../../types/componentTypes';

const Container = (pops: ContainerProps) => {
  return <div style={pops.style}>{pops.children}</div>;
};

export default Container;

import React from 'react';
import Greeting from '../props/Greeting';

const CustomComponent = (props: React.ComponentProps<typeof Greeting>) => {
  return <div>{props.isLoggedIn && <Greeting {...props} />}</div>;
};

export default CustomComponent;

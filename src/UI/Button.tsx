import React, {ReactNode} from 'react';

type buttonProps = {
  children: ReactNode;
};

const Button: React.FC<buttonProps> = (props) => {
  return <button className="btn">{props.children}</button>;
};

export default Button;

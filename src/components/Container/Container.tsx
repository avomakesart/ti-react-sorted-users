import React, { ReactNode } from 'react';
import './container.css';

interface ContainerProps {
  children: ReactNode | ReactNode[];
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='container'>{children}</div>;
};

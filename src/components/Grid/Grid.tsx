import React, { ReactNode } from 'react';
import './grid.css';

interface GridProps {
  children: ReactNode | ReactNode[];
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className='grid-wrapper'>{children}</div>;
};

import React, { ReactNode } from 'react';
import './title.css';

interface TitleProps {
  children: ReactNode | ReactNode[];
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className='title-container'>
      <h1 className='title'>{children}</h1>
    </div>
  );
};

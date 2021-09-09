import React from 'react';
import './user-image.css';

interface UserImageProps {
  url: string | undefined;
  alt: string | undefined;
}

export const UserImage: React.FC<UserImageProps> = ({ url, alt }) => {
  return (
    <div className='user-image-container'>
      <img src={url} alt={alt} className='user-image' />
    </div>
  );
};

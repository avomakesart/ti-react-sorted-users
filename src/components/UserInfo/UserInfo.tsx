import React from 'react';
import './user-info.css';

interface UserInfoProps {
  fullName: string | undefined;
  email: string | undefined;
}

export const UserInfo: React.FC<UserInfoProps> = ({ fullName, email }) => {
  return (
    <div className='user-info-container'>
      <p className='user-info-name'>{fullName}</p>
      <p className='user-info-email'>{email}</p>
    </div>
  );
};

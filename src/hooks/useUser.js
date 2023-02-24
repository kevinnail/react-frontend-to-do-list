import { useContext } from 'react';
import { UserContext } from './UserContext.js';

const useUser = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error('useUser must be wrapped in a UserProvider');
  }
  return data;
};

export { useUser };

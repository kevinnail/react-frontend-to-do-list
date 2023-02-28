import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../hooks/useUser.js';

export default function Posts() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return <div>Posts</div>;
}

import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../hooks/useUser.js';

export default function Posts() {
  const { user } = useUser();
  // const history = useHistory();
  console.log('user in Posts.js', user);
  // console.log('history in Posts.js', history.replace);
  console.log('page reloads on Posts.js');

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return <div>Posts</div>;
}

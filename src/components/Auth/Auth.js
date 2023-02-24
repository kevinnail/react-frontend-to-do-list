import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { getUser, signInUser, signUpUser } from '../../services/fetch-utils.js';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const { user, logInUser } = useUser();

  const submitAuth = async () => {
    try {
      let response;
      if (isSignIn) {
        response = await signInUser(email, password);
      } else {
        response = await signUpUser(email, password);
      }

      if (response.ok) {
        const user = await getUser();
        logInUser(user);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (user) {
    return <Redirect to="/posts" />;
  }

  return (
    <div className="auth-container">
      <div className="sign-in-sign-out">
        <NavLink to="/auth/sign-in" onClick={() => setIsSignIn(true)}>
          Sign-in
        </NavLink>
        <NavLink to="/auth/sign-up" onClick={() => setIsSignIn(false)}>
          Sign-up
        </NavLink>
      </div>

      <div className="email-container">
        <input
          className="input"
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={submitAuth}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      </div>
    </div>
  );
}

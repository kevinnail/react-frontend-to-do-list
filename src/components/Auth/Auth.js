import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import './Auth.css';
// import { login, getUser } from '../../services/auth.js';
import { signInUser, getUser } from '../../services/fetch-utils.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUser();
  const submitAuth = async () => {
    try {
      const response = await signInUser(email, password);
      if (response.ok) {
        const user = await getUser();
        setUser(user);
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
        <NavLink to="/auth/sign-in">Sign-in</NavLink>
        <NavLink to="/auth/sign-up">Sign-up</NavLink>
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
        <button onClick={submitAuth}>Submit</button>
      </div>
    </div>
  );
}

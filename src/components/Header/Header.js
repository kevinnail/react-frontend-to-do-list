import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleClick = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <header>
      {/* <a href="/todos">
        <img className="icon" src="../bulletin-board-icon.png" />
      </a> */}

      <Link className="link" to="/todos">
        <img className="icon" src="../bulletin-board-icon.png" />
      </Link>
      <h1 className="title">To Do List</h1>
      {user && (
        <div className="header-section">
          <p>
            Logged in as: <span> {user.email}</span> <br />
          </p>
          <Link className="link" to="/todos/new">
            New Post
          </Link>
          <button onClick={handleClick}>Sign Out</button>
        </div>
      )}
    </header>
  );
}

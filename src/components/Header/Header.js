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
      <img className="icon" src="../bulletin-board-icon.png" />
      <h1>To Do List</h1>
      {user && (
        <div className="header-section">
          <p>
            EMAIL FOR SALE: <span> {user.email}</span> <br />
          </p>
          <Link to="/posts/new">New Post</Link>
          <button onClick={handleClick}>Sign Out</button>
        </div>
      )}
    </header>
  );
}

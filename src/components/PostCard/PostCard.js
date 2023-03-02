import { Link, Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import './PostCard.css';

export default function PostCard({ task, id }) {
  const { user } = useUser();
  const { error } = usePosts();
  // const [finished, setFinished] = useState(false);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleClick = (e) => {
    if (e.target.name === 'delete') {
      //
    } else {
      //
      // setFinished((prevFinished) => {
      //
      // return !prevFinished;
      // });
    }
  };

  return (
    <div className="post overlay" key={id}>
      <Link className="buttons" to={`/todos/edit/${id}`}>
        <img src="/edit.png" className="edit-button" alt="edit" />{' '}
      </Link>
      <div>
        <img
          className="buttons"
          onClick={handleClick}
          src="/delete.png"
          name="delete"
          alt="delete"
        />
      </div>
      <h1 className="todo" onClick={handleClick} name="finished">
        {task}
      </h1>
    </div>
  );
}

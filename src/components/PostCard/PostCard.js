import { Link, Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import { fetchTodos, toggleComplete } from '../../services/fetch-utils.js';
import './PostCard.css';

export default function PostCard({ task, id, completed }) {
  const { user } = useUser();
  const { error, setPosts } = usePosts();

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

  const handleTest = async () => {
    await toggleComplete(!completed, id);
    const updatedPosts = await fetchTodos(); // replace this with the appropriate function to fetch the updated list of posts
    setPosts(updatedPosts);
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
      <h1 onClick={handleTest} className="todo" name="finished" id={id}>
        {task}
      </h1>
    </div>
  );
}

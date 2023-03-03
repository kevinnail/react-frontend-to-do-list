import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { usePost } from '../../hooks/usePost.js';
// import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import { deleteById, toggleComplete } from '../../services/fetch-utils.js';
import './PostCard.css';

export default function PostCard({ task, id, completed, setPosts, posts }) {
  const { user } = useUser();
  // const { error, setPosts, setLoading, setError } = usePosts();
  // const { error, setPosts, posts } = usePosts();
  // const { error } = usePosts();
  const { setLoading, setError } = usePost(id);
  const [isCompleted, setIsCompleted] = useState(completed);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const handleDelete = async () => {
    try {
      await deleteById(id);
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
      setLoading(true);
    } catch (e) {
      setError(e.message);
    }
  };

  // make the post card clickable and toggle the completed status
  const handleEdit = async () => {
    await toggleComplete(!isCompleted, id);
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="post overlay" key={id}>
      <Link className="buttons" to={`/todos/edit/${id}`}>
        <img src="/edit.png" className="edit-button" alt="edit" />{' '}
      </Link>
      <Link className="buttons" to={`/todos/${id}`} onClick={handleDelete}>
        <img
          className="edit-button buttons-2"
          onClick={() => {}}
          src="/delete.png"
          name="delete"
          alt="delete"
        />
      </Link>
      <h1 onClick={() => handleEdit()} className={isCompleted ? 'completed-todo' : 'todo'} id={id}>
        {isCompleted ? (
          <>
            <img className="unchecked-box" src="./unchecked.png" />
            <img className="checked" src="./finished.png" />
            <span>{task}</span>
            <span className="now-completed">NOW COMPLETED</span>
          </>
        ) : (
          <>
            <img className="unchecked" src="./unchecked.png" />
            <span className="task-span">{task}</span>
          </>
        )}
      </h1>
    </div>
  );
}

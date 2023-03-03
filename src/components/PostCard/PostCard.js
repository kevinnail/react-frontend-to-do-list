import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import { toggleComplete } from '../../services/fetch-utils.js';
import './PostCard.css';

export default function PostCard({ task, id, completed }) {
  const { user } = useUser();
  const { error } = usePosts();

  const [isCompleted, setIsCompleted] = useState(completed);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <div>
        <img className="buttons" onClick={() => {}} src="/delete.png" name="delete" alt="delete" />
      </div>
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

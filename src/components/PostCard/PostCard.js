import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import './PostCard.css';

export default function PostCard({ task, id }) {
  const { user } = useUser();
  const { error } = usePosts();
  const [finished, setFinished] = useState(false);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleClick = (e) => {
    if (e.target.name === 'edit') {
      console.log('edit');
    } else if (e.target.name === 'delete') {
      console.log('delete');
    } else {
      console.log('finished before setter', finished);
      setFinished((prevFinished) => {
        console.log('finished after setter', !prevFinished);
        return !prevFinished;
      });
    }
  };

  return (
    <div className="post overlay" key={id}>
      <div>
        <img className="buttons" onClick={handleClick} name="edit" src="/edit.png" alt="edit" />
      </div>
      <div>
        {' '}
        <img className="buttons" onClick={handleClick} src="/delete.png" name="delete" alt="edit" />
      </div>
      <h1 className="todo" onClick={handleClick} name="finished">
        {task}
      </h1>
    </div>
  );
}

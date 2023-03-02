import { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import EditPost from '../EditPost/EditPost.js';
import './PostCard.css';

export default function PostCard({ task, id }) {
  const { user } = useUser();
  const { error } = usePosts();
  const [finished, setFinished] = useState(false);
  const history = useHistory();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleClick = (e) => {
    console.log('id', id); // working

    history.push(`/posts/edit/${id}`);

    if (e.target.name === 'delete') {
      //
    } else {
      //
      setFinished((prevFinished) => {
        //
        return !prevFinished;
      });
    }
  };

  return (
    <div className="post overlay" key={id}>
      <Link onClick={handleClick} className="buttons" to={`/posts/edit/${id}`}>
        <img src="/edit.png" className="edit-button" alt="edit" />
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

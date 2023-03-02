// import { useState } from 'react';
// import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { usePost } from '../../hooks/usePost.js';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
// import EditPost from '../EditPost/EditPost.js';
import './PostCard.css';
// import { useLocation } from 'react-router-dom';
export default function PostCard({ task, id }) {
  // const location = useLocation();
  // const id = location.pathname.split('/').pop();
  const { user } = useUser();
  const { error } = usePosts();
  // const [finished, setFinished] = useState(false);
  const history = useHistory();
  // const { id } = useParams();
  const { postDetail } = usePost(id);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleClick = (e) => {
    console.log('id in handle click', id);
    history.push(`/posts/edit/${postDetail.id}`);
    console.log('history', history);

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

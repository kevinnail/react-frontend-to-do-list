import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import { toggleComplete } from '../../services/fetch-utils.js';
import './PostCard.css';

export default function PostCard({ task, id, completed }) {
  const { user } = useUser();
  const { error, posts, setPosts } = usePosts();

  const [isCompleted, setIsCompleted] = useState(completed);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = async () => {
    const updatedPost = await toggleComplete(!isCompleted, id);
    setIsCompleted(!isCompleted);

    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
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
          onClick={() => {
            // handleDelete
          }}
          src="/delete.png"
          name="delete"
          alt="delete"
        />
      </div>
      <h1 onClick={() => handleEdit()} className="todo" id={id}>
        {isCompleted ? 'FINISHED!   ' + task : task}
      </h1>
    </div>
  );
}

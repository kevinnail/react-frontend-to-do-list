import { Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import './PostCard.css';

export default function PostCard({ task, id }) {
  const { user } = useUser();
  const { error } = usePosts();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="post" key={id}>
      <h1>{task}</h1>
    </div>
  );
}

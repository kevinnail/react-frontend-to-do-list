import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import './PostCard.css';

export default function PostCard({ title, description, user_id, id, setPosts, posts }) {
  const { user } = useUser();
  const { setLoading, setError } = usePosts(id);

  return (
    <div className="post" key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

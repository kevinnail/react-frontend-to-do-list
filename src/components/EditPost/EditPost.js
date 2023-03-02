import { Redirect, useHistory, useParams } from 'react-router-dom';
import { updatePost } from '../../services/fetch-utils.js';
import PostForm from '../PostForm/PostForm.js';
import { usePost } from '../../hooks/usePost.js';
import { useUser } from '../../hooks/useUser.js';

export default function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const { postDetail, loading, setLoading, error, setError } = usePost(id);
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const handleSubmit = async (task) => {
    setLoading(true);

    try {
      await updatePost(postDetail.id, task);
      history.push('/todos');
    } catch (e) {
      setError(e.message);
    }
  };

  return <PostForm {...postDetail} submitHandler={handleSubmit} />;
}

import React from 'react';
import { Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import PostCard from '../PostCard/PostCard.js';

export default function Posts() {
  const { user } = useUser();
  const { posts, loading } = usePosts();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  console.log('loading: ', loading);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="list-container">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

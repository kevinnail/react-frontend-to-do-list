import React from 'react';
import { Redirect } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts.js';
import { useUser } from '../../hooks/useUser.js';
import PostCard from '../PostCard/PostCard.js';

export default function Posts() {
  const { user } = useUser();
  const { posts, setPosts } = usePosts();
  console.log('Posts posts', posts);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="list-container">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} posts={posts} setPosts={setPosts} />
      ))}
    </div>
  );
}

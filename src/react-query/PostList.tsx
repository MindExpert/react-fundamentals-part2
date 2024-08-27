import usePosts from './hooks/usePosts';
import { useState } from 'react';


const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <select onChange={(event) => setUserId(parseInt(event.target.value))} className="form-select mb-3" value={userId}>
        <option value="">Select Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3 </option>
      </select>
      <h1>Posts</h1>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;

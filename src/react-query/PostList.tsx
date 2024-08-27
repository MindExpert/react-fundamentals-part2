import usePosts from './hooks/usePosts';
import { useState } from 'react';


const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState<number>(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Posts</h1>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 mx-2"
        onClick={() => setPage((page) => page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-2"
        onClick={() => setPage((page) => page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;

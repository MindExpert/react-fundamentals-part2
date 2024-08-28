import React from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Posts</h1>
      <ul className="list-group">
        {/* {data?.pages.map((page) => page.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        )))
        } */}
        {
          data?.pages.map((page, index) =>
            <React.Fragment key={index}>
              {page.map((post) =>
                <li key={post.id} className="list-group-item">{post.title}</li>
              )}
            </React.Fragment>
          )
        }
      </ul>
      <button
        className="btn btn-primary my-3 ms-2"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading...' : 'Load more'}
      </button>
    </>
  );
};

export default PostList;

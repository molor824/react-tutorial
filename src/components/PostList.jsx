import Post from "./Post";

function PostList({ posts }) {
  return (
    <div className="flex flex-wrap justify-center max-w-[64rem] p-4 gap-4">
      {posts.length !== 0 ? (
        posts.map(({ title, body }, i) => (
          <Post title={title} body={body} key={i} />
        ))
      ) : (
        <div className="text-opacity-50 text-white font-bold text-center">
          <p>No posts yet</p>
          <p>Start adding some !!</p>
        </div>
      )}
    </div>
  );
}

export default PostList;

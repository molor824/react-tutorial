import { useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const handleNewPost = (post) => setPosts([...posts, post]);

  return (
    <div className="flex flex-col items-center">
      <Header onNewPost={handleNewPost} />
      <div className="bg-gray-300 w-full h-[2px]"></div>
      <PostList posts={posts} />
    </div>
  );
}

export default App;

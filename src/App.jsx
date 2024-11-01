import { useState } from "react";
import Newform from "./components/Newform";
import Post from "./components/Post";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [posts, setPosts] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const handleSubmit = (post) => {
    setPosts([...posts, post]);
    setFormOpen(false);
  };
  const handleCloseRequest = () => setFormOpen(false);
  const handleOpenRequest = () => setFormOpen(true);
  return (
    <div className="flex flex-col items-center">
      <Modal open={formOpen} onCloseRequested={handleCloseRequest}>
        <Newform onSubmit={handleSubmit} />
      </Modal>
      <Header onNewPost={handleOpenRequest} />
      <div className="bg-gray-300 w-full h-[2px]"></div>
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
    </div>
  );
}

export default App;

import { useState } from "react";
import Newform from "./Newform";
import Modal from "./Modal";

function Header({ onNewPost }) {
  const [formOpen, setFormOpen] = useState(false);
  const handleSubmit = (post) => {
    onNewPost(post);
    handleCloseRequest();
  };
  const handleCloseRequest = () => setFormOpen(false);
  const handleOpenRequest = () => setFormOpen(true);

  return (
    <header className="flex flex-row items-center justify-between w-full max-w-[64rem] p-4">
      <Modal open={formOpen} onCloseRequested={handleCloseRequest}>
        <Newform onSubmit={handleSubmit} />
      </Modal>
      <h1 className="text-2xl text-white">React Poster</h1>
      <button
        className="bg-purple-400 rounded-xl p-4"
        onClick={handleOpenRequest}
      >
        New Post
      </button>
    </header>
  );
}

export default Header;

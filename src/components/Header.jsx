function Header({ onNewPost }) {
  return (
    <header className="flex flex-row items-center justify-between w-full max-w-[64rem] p-4">
      <h1 className="text-2xl text-white">React Poster</h1>
      <button className="bg-purple-400 rounded-xl p-4" onClick={onNewPost}>
        New Post
      </button>
    </header>
  );
}

export default Header;

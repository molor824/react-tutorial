function Post({ title, body }) {
  return (
    <div className="bg-purple-400 rounded-xl p-4 w-[16rem] animate-fadeIn">
      <h1 className="font-bold text-2xl text-center">{title}</h1>
      <p className="text-xl text-center font-italics break-words">{body}</p>
    </div>
  );
}

export default Post;

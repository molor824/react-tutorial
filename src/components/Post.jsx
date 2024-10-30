function Post({ title, body }) {
  return (
    <div className="bg-purple-400 rounded-xl p-4 w-[16rem]">
      <h1 className="font-bold text-2xl text-center">{title}</h1>
      <p className="text-xl text-center font-italics">{body}</p>
    </div>
  );
}

export default Post;

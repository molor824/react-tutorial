import { useRef, useState } from "react";

function Newform({ onSubmit }) {
  const bodyRef = useRef(null);
  const titleRef = useRef(null);
  const [bodyError, setBodyError] = useState();
  const [titleError, setTitleError] = useState();

  return (
    <form className="bg-purple-700 p-4 rounded-xl flex flex-col gap-4">
      <div>
        <label htmlFor="body" className="block mb-2 text-purple-100 font-bold">
          {bodyError ?? "Body"}
        </label>
        <textarea
          required
          rows={3}
          onInput={() => setBodyError()}
          ref={bodyRef}
          name="body"
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
        />
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 text-purple-100 font-bold">
          {titleError ?? "Title"}
        </label>
        <input
          type="text"
          name="title"
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          ref={titleRef}
          onInput={() => setTitleError()}
        />
      </div>
      <button
        type="button"
        className="items-end default"
        onClick={() => {
          let success = true;
          let title = titleRef.current.value.trim();
          let body = bodyRef.current.value.trim();

          if (title === "") {
            setTitleError("Please fill in");
            success = false;
          }
          if (body === "") {
            setBodyError("Please fill in");
            success = false;
          }

          if (!success) return;

          onSubmit && onSubmit({ title, body });
          titleRef.current.value = "";
          bodyRef.current.value = "";
        }}
      >
        Post
      </button>
    </form>
  );
}

export default Newform;

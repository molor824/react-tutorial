import { useState } from "react";

function Newform({ onSubmit }) {
  const [bodyText, setBodyText] = useState("");
  const [titleText, setTitleText] = useState("");
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
          onInput={(e) => {
            setBodyText(e.currentTarget.value);
            setBodyError();
          }}
          name="body"
          value={bodyText}
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
          value={titleText}
          onInput={(e) => {
            setTitleText(e.currentTarget.value);
            setTitleError();
          }}
        />
      </div>
      <button
        type="button"
        className="items-end default"
        onClick={() => {
          let success = true;
          let title = titleText.trim();
          let body = bodyText.trim();

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
          setTitleText("");
          setBodyText("");
        }}
      >
        Post
      </button>
    </form>
  );
}

export default Newform;

import { useState } from "react";
import { Input } from "../Input";

export const AddPost = (props) => {
  const [title, setTitle] = useState("Please enter post title");
  const [body, setBody] = useState("Please enter post body");

  const handleSubmit = () => {
    console.log("Calling to backend service");
    props.addPost({ title, body });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Todo</h1>

      <Input value={title} setValue={setTitle} label="Title" type="text" />
      <Input value={body} setValue={setBody} label="Body" type="text" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Post
      </button>
    </div>
  );
};

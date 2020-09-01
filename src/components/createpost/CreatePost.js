import React, { useState } from "react";
import "./CreatePost.css";
import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import { useStateValue } from "../../store/StateProvider";
import firebase from "firebase";
import db from "../../firebase";

export default function CreatePost() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });
    setInput("");
    setImageURL("");
  };

  return (
    <div className="createPost">
      <div className="createPost__top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="createPost__input"
            placeholder={`What's on your mind ${user.displayName}?`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="createPost__bottom">
        <div className="createPost__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="createPost__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="createPost__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

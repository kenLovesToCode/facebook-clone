import React from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import {
  ThumbUp,
  ChatBubbleOutline,
  NearMe,
  ExpandMoreOutlined,
  AccountCircle,
} from "@material-ui/icons";

export default function Posts({
  profilePic,
  image,
  username,
  timestamp,
  message,
}) {
  return (
    <div className="posts">
      <div className="posts__top">
        <Avatar src={profilePic} className="posts__avatar" />
        <div className="posts__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="posts__bottom">
        <p>{message}</p>
      </div>

      <div className="posts__image">
        <img src={image} />
      </div>

      <div className="posts__options">
        <div className="posts__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="posts__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="posts__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="posts__option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

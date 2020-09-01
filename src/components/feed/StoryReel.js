import React from "react";
import "./StoryReel.css";
import Story from "./Story";

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1562244510-70270c6e138f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        profileSrc="https://images.unsplash.com/photo-1485423036251-8b2a2909899f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        title="First Person"
      />
      <Story
        image="https://images.unsplash.com/photo-1552004114-337ee51baa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        profileSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        title="Second Person"
      />
      <Story
        image="https://images.unsplash.com/photo-1586805902594-c779ac737e19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        profileSrc="https://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        title="Third Person"
      />
      <Story
        image="https://images.unsplash.com/photo-1503643766889-957dc3096721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        profileSrc="https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        title="Fourth Person"
      />
      <Story
        image="https://images.unsplash.com/photo-1575581731403-f7ace65e7b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        profileSrc="https://images.unsplash.com/photo-1552607676-17f088307dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        title="Fifth Person"
      />
    </div>
  );
}

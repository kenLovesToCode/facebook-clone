import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMoreOutlined,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Jovanne Vicentino"
        src="https://lh3.googleusercontent.com/a-/AOh14Gjsn414ouRUth9kaHcN2LK4ab8VIRmZ4tZnqnne=s88-c-k-c0x00ffffff-no-rj-mo"
      />
      <SidebarRow title="Pages" Icon={EmojiFlags} />
      <SidebarRow title="Friends" Icon={People} />
      <SidebarRow title="Messages" Icon={Chat} />
      <SidebarRow title="Marketplace" Icon={Storefront} />
      <SidebarRow title="Videos" Icon={VideoLibrary} />
      <SidebarRow title="More" Icon={ExpandMoreOutlined} />
    </div>
  );
}

//1:26:00

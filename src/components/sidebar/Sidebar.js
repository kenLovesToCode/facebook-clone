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
import { useStateValue } from "../../store/StateProvider";

export default function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} />
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

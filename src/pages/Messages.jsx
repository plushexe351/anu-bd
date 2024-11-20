import React from "react";
import HomeTopBar from "../Components/HomeTopBar";
import Posts from "../Components/Posts";
import Navbar from "../Components/Navbar";
import {
  ChevronLeft,
  Grid,
  Menu,
  MoreHorizontal,
  Send,
  Share,
  Table,
} from "react-feather";
import "./messages.scss";
import ushphp from "../assets/ushpfp.JPG";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();
  return (
    <div className="messages">
      <div className="body-full">
        <div className="messagestopbar">
          <ChevronLeft onClick={() => navigate("/home")} />
          <h4 className="username">in.your.wetdreams</h4>
          <div className="actions">
            <MoreHorizontal />
          </div>
        </div>
        <div className="messageCategory">
          <div className="general">General</div>
        </div>
        <div className="dms">
          <div className="dm">
            <img src={ushphp} alt="" />
            <div className="msg-details">
              <div className="sender-username">ush.nsfw</div>
              <div className="message">
                god bless u · <span>2m</span>
              </div>
            </div>
          </div>
          <div className="dm">
            <img src={ushphp} alt="" />
            <div className="msg-details">
              <div className="sender-username">ush.nsfw</div>
              <div className="message">
                Happy Birthday Pookie 🖤 · <span>2y</span>
              </div>
            </div>
          </div>
        </div>
        <div className="suggestions">
          <h3>Suggestions</h3>
          <p>🎉 have a bombastic birthday</p>
        </div>
      </div>
      <Navbar maincomponent="messages" />
    </div>
  );
};

export default Messages;

import React from "react";
import { Camera, Heart, MessageSquare, Send } from "react-feather";
import pookiegram from "../assets/pookiegram.png";
import { useNavigate } from "react-router-dom";

const HomeTopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="hometopbar">
      <Camera />

      <img src={pookiegram} alt="" />

      <Send onClick={() => navigate("/messages")} />
    </div>
  );
};

export default HomeTopBar;

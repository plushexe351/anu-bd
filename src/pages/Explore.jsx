import React from "react";
import HomeTopBar from "../Components/HomeTopBar";
import Posts from "../Components/Posts";
import Navbar from "../Components/Navbar";
import {
  AlertCircle,
  AlertOctagon,
  CheckCircle,
  Info,
  XCircle,
} from "react-feather";

const Explore = () => {
  return (
    <div className="explore">
      <HomeTopBar />
      <div className="body-full">
        <div className="birthdaywish">
          <XCircle size={40} color="red" />
          What you tryna explore huh ?
        </div>
      </div>
      <Navbar maincomponent="explore" />
    </div>
  );
};

export default Explore;

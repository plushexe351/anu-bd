import React from "react";
import { Heart, Home, Search, User, Video } from "react-feather";
import Profile from "./Profile";

const CouponsNavbar = () => {
  return (
    <div className="navbar">
      <div className="navitem">
        <div className="navitem--icon">
          <Home />
        </div>
        <div className="navitem--name">Home</div>
      </div>
      <div className="navitem">
        <div className="navitem--icon">
          <Search />
        </div>
        <div className="navitem--name">Explore</div>
      </div>
      <div className="navitem">
        <div className="navitem--icon">
          <Heart fill="white" />
        </div>
        <div className="navitem--name">Coupons</div>
      </div>
      <div className="navitem">
        <div className="navitem--icon">
          <User />
        </div>
        <div className="navitem--name">Your Profile</div>
      </div>
    </div>
  );
};

export default CouponsNavbar;

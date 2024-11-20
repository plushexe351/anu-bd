import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Home, Search, User } from "react-feather";

const Navbar = ({ maincomponent }) => {
  const navigate = useNavigate(); // For programmatic navigation

  const menuItems = [
    { name: "Home", icon: <Home />, key: "home", path: "/" },
    { name: "Explore", icon: <Search />, key: "explore", path: "/explore" },
    {
      name: "Coupons",
      icon: <Heart className="fill" />,
      key: "coupons",
      path: "/pookie/coupons",
    },
    { name: "Your Profile", icon: <User />, key: "profile", path: "/bio" },
  ];

  return (
    <div className="navbar">
      {menuItems.map(({ name, icon, key, path }) => (
        <div
          key={key}
          className={`navitem ${maincomponent === key ? "active" : ""}`}
          onClick={() => navigate(path)} // Navigate on click
        >
          <div className="navitem--icon">{icon}</div>
          <div className="navitem--name">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;

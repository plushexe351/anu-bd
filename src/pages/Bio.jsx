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
import "./bio.scss";
import anupfp from "../assets/anupfp.JPG";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.JPG";
import post3 from "../assets/post3.JPG";
import post4 from "../assets/post4.JPG";
import post5 from "../assets/post5.JPG";
import post6 from "../assets/post6.jpg";
import post7 from "../assets/post7.jpg";

const Bio = () => {
  return (
    <div className="bio">
      <div className="body-full">
        <div className="profiletopbar">
          <ChevronLeft />
          <h4 className="username">in.your.wetdreams</h4>
          <div className="actions">
            <MoreHorizontal />
          </div>
        </div>
        <div className="pfpandstats">
          <img src={anupfp} alt="" />
          <div className="stats--posts">
            <div className="metric">2</div>
            <p>posts</p>
          </div>
          <div className="stats--followers">
            <div className="metric">307</div>
            <p>followers</p>
          </div>
          <div className="stats--following">
            <div className="metric">8</div>
            <p>following</p>
          </div>
        </div>
        <div className="profile-about">
          <div className="user-name">e-girl hun 👎</div>
          <div className="profile-bio">Mood posting</div>
          <div className="pookie-dashboard">pookie dashboard</div>
        </div>
        <div className="posts">
          <p>
            <Grid size={18} />
            POSTS
          </p>
          <div className="profile-posts-container">
            <img src={post7} alt="" />
            <img src={post3} alt="" />
            <img src={post6} alt="" />
            <img src={post5} alt="" />
          </div>
        </div>
      </div>
      <Navbar maincomponent="profile" />
    </div>
  );
};

export default Bio;

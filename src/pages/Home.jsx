import React from "react";
import HomeTopBar from "../Components/HomeTopBar";
import Posts from "../Components/Posts";
import Navbar from "../Components/Navbar";
import Confetti from "react-confetti";

const Home = () => {
  return (
    <div className="home">
      <Confetti recycle={false} />

      <HomeTopBar />

      <Posts />
      <Navbar maincomponent="home" />
    </div>
  );
};

export default Home;

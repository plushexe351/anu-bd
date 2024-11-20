import React, { useEffect, useRef } from "react";
import {
  CheckCircle,
  Heart,
  MessageCircle,
  MoreHorizontal,
} from "react-feather";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.JPG";
import post3 from "../assets/post3.JPG";
import post4 from "../assets/post4.JPG";
import post5 from "../assets/post5.JPG";
import ushpfp from "../assets/ushpfp.JPG";

const Posts = () => {
  const postsData = [
    {
      id: 1,
      creatorName: "ush.nsfw",
      creatorLocation: "Your Walls",
      profilePic: ushpfp,
      postImage: post1,
      caption: "Happy Birthday ! 🖤",
      likes: 2,
      comments: 1,
    },
    {
      id: 2,
      creatorName: "ush.nsfw",
      creatorLocation: "Your Walls",
      profilePic: ushpfp,
      postImage: post2,
      caption: "Apple of my eye 🍎",
      likes: 2,
      comments: 1,
    },
    {
      id: 3,
      creatorName: "ush.nsfw",
      creatorLocation: "Your Walls",
      profilePic: ushpfp,
      postImage: post3,
      caption: "Gorjus ✨",
      likes: 2,
      comments: 1,
    },
    {
      id: 4,
      creatorName: "ush.nsfw",
      creatorLocation: "Your Walls",
      profilePic: ushpfp,
      postImage: post5,
      caption: "4life",
      likes: 2,
      comments: 1,
    },
    {
      id: 5,
      creatorName: "ush.nsfw",
      creatorLocation: "Your Walls",
      profilePic: ushpfp,
      postImage: post4,
      caption: "Just lookin like a wow",
      likes: 2,
      comments: 1,
    },
  ];

  return (
    <div className="posts" style={{ overflowY: "scroll", maxHeight: "100vh" }}>
      <div className="birthdaywish">
        <CheckCircle size={40} color="lightgreen" />
        Happy Birthday Anu 🖤
      </div>
      {postsData.map((post) => (
        <div key={post.id} className="post">
          <div className="post-credentials">
            <img src={post.profilePic} alt="" className="post--pfp" />
            <div className="post-creator">
              <h3 className="creator-name">{post.creatorName}</h3>
              <p className="creator-location">{post.creatorLocation}</p>
            </div>
            <div className="post-menu">
              <MoreHorizontal />
            </div>
          </div>
          <img src={post.postImage} alt="" className="post-img" />
          <div className="post-actions">
            <Heart fill="red" stroke="non2" />
            {post.likes}
            <MessageCircle />
            {post.comments}
          </div>
          <div className="post-caption">
            <h3 className="creator-name">{post.creatorName}</h3>
            <p className="caption-content">{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

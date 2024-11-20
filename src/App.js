import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import "./styles.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Coupons from "./pages/Coupons";
import Bio from "./pages/Bio";

import Navbar from "./Components/Navbar";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Confetti from "react-confetti";

function App() {
  return (
    <Router>
      <div className="App">
        <Confetti recycle={false} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/pookie/coupons" element={<Coupons />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>

        <ToastContainer position="bottom-center" />
      </div>
    </Router>
  );
}

export default App;

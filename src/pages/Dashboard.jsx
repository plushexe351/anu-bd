import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { ChevronLeft, Settings } from "react-feather";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Confetti from "react-confetti";

import "./dashboard.scss";
import Posts from "../Components/Posts";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const navigate = useNavigate();
  const barData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Love Percentage",
        data: [110, 115, 120, 125, 130, 135, 140], // Love percentage exceeds 100%
        backgroundColor: "#FF6F61",
        borderColor: "#FF6F61",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Love Percentage - Every Day",
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 100, // Minimum value to make sure it exceeds 100%
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  const pieData = {
    labels: ["Happiness", "Time Spent", "Fun", "Cuddles", "Laughter"],
    datasets: [
      {
        data: [20, 25, 15, 10, 30],
        backgroundColor: [
          "#FF6F61",
          "#FFBF00",
          "#B0E0E6",
          "#FFD700",
          "#32CD32",
        ],
        borderColor: ["#FF6F61", "#FFBF00", "#B0E0E6", "#FFD700", "#32CD32"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Relationship Parameters",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="body-full">
        <div className="dashboardtopbar">
          <ChevronLeft onClick={() => navigate("/")} />
          <h4>Pookie Dashboard</h4>
          <Settings />
        </div>
        <div className="charts-container">
          <div className="chart">
            <h5>Love Bar Chart</h5>
            <Bar data={barData} options={barOptions} />
          </div>

          <div className="chart">
            <h5>Relationship Parameters</h5>
            <Pie data={pieData} options={pieOptions} />
          </div>

          <div className="chart">
            <h5>Daily Happiness</h5>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
      <Navbar maincomponent="dashboard" />
    </div>
  );
};

export default Dashboard;

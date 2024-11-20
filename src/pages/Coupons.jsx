import React, { useState } from "react";
import HomeTopBar from "../Components/HomeTopBar";
import Navbar from "../Components/Navbar";
import { CheckCircle } from "react-feather";
import Confetti from "react-confetti";
import "./coupons.scss";
import { toast } from "react-toastify";

// Reusable Coupon Component
const Coupon = ({ title, quantity, validTill, description, onClaim }) => (
  <div className="coupon">
    {title && <h3>{title}</h3>}
    {description && <div className="coupon-description">{description}</div>}
    {quantity && <div className="item-qty">{quantity}</div>}
    <div className="valid-till">
      <h3>Valid Till</h3>
      <p>{validTill}</p>
    </div>
    <button className="Btn" onClick={onClaim}>
      Claim
    </button>
  </div>
);

const Coupons = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [couponsData, setCouponsData] = useState([
    {
      title: "🍠 Sweet Potatoes",
      quantity: "500gms",
      validTill: "Death does us part",
    },
    {
      title: "🥭 Alphonso Mango",
      quantity: "1kg",
      validTill: "Death does us part",
    },
    {
      title: "🥟 Veg Momos",
      quantity: "1 plt",
      validTill: "Death does us part",
    },
    {
      title: "🏅 22k Gold Coin",
      quantity: "0.20g",
      validTill: "Death does us part",
    },
  ]);

  const handleClaim = (couponIndex) => {
    setShowConfetti(true);
    toast.success("Claimed !");
    // Remove the coupon from the state
    setCouponsData((prevCoupons) =>
      prevCoupons.filter((_, index) => index !== couponIndex)
    );
    setTimeout(() => setShowConfetti(false), 6000); // Stop confetti after 3 seconds
  };

  return (
    <div className="coupons">
      {showConfetti && <Confetti recycle={false} />}
      <HomeTopBar />
      <div className="body-full">
        <div className="birthdaywish">
          <CheckCircle size={40} color="lightgreen" />
          Claim your pookie coupons 🤩
        </div>
        {couponsData.map((coupon, index) => (
          <Coupon
            key={index}
            title={coupon.title}
            quantity={coupon.quantity}
            validTill={coupon.validTill}
            description={coupon.description}
            onClaim={() => handleClaim(index)} // Pass the index to remove the correct coupon
          />
        ))}
      </div>
      <Navbar maincomponent="coupons" />
    </div>
  );
};

export default Coupons;

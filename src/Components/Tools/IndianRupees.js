import React from "react";

function IndianRupees({ children = 0, className = "" }) {
  const newPrice = children.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
  return (
    <p className={className}>
      {Number(children) >= 0 ? `₹${newPrice}` : `-₹${newPrice.slice(1)}`}
    </p>
  );
}

export default IndianRupees;

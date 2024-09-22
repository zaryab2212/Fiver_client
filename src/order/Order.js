import React from "react";
import "./order.css";

const Order = () => {
  return (
    <div className="container order bg-light flex align-items-center justify-content-center ">
      <p className="fs-4 text-danger bg-light m-2 p-3 ">
        You do not have any order yet
      </p>
    </div>
  );
};

export default Order;

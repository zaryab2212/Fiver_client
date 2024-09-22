import React from "react";
import { Link } from "react-router-dom";
import "./gigCard.css";
import { FaStar, FaBurn } from "react-icons/fa";

const GigCard = ({ item }) => {
  return (
    <>
      <Link className=" m-2" to={`/gig/${item._id}`}>
        <div className=" flex flex-column border rounded-3 justify-content-center align-items-center bg-light w-100 ">
          <img
            className="h-75 mt-2 mx-4 object-fit-cover border rounded-3 align-items-center flex justify-content-center w-75"
            src={item.image}
            alt="gig picture pic"
          />

          <div>
            {" "}
            <div className="info">
              <div className="user">
                <img src={item.userId.image} alt="profie pic" />
                <span>{item.userId.userName}</span>
              </div>{" "}
              <b style={{ fontSize: "1.2rem", color: "red" }}>{item.title}</b>
              <div className="star">
                <FaStar color="orange" width={7} height={7} />
                <span> {item.starNumber}</span>
              </div>
            </div>
            <div className="details ">
              {" "}
              <div>
                {" "}
                <FaBurn color="orange" width={7} height={7} />
                <span>Starting At</span>
              </div>
              <h4>{item.price} $</h4>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GigCard;

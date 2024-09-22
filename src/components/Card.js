import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {/* <Link to={`/gigs/cat=${data.cat}`}> */}
      <div className="card cursor-pointer" style={{ width: "18rem" }}>
        <div className="card-body cursor-pointer">
          <div className="card-desc">
            <h6 className="card-subtitle mb-2 text-muted">{data?.cat}</h6>
            <h5 className="card-title">{data?.cat}</h5>
          </div>

          <img className="w-100 h-75" src={data?.image} alt="catimage" />
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default Card;

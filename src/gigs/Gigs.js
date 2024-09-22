import React, { useEffect, useState } from "react";
import "./gigs.css";
import GigCard from "../components/gigCard.js/GigCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchGigByCategoryAsync, getAllGigAsync } from "../redux/gigs/gigSice";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [minPrice, setminPrice] = useState("");
  const [maxPrice, setmaxPrice] = useState("");
  const [category, setCategory] = useState(null);

  const dispatch = useDispatch();
  const { Gigs } = useSelector((state) => state.gig);
  // const param = req.params;
  const location = useLocation();

  const handleFilter = () => {
    let formdata = {
      min: minPrice,
      max: maxPrice,
    };

    dispatch(fetchGigByCategoryAsync(formdata));
  };
  useEffect(() => {
    if (location.pathname === "/gigs/" || location.pathname === "/gigs") {
      !location.search && dispatch(getAllGigAsync());
    }
  }, []);

  return (
    <>
      <div className=" container mt-4 gigs" style={{ minHeight: "29rem" }}>
        <div className="container">
          <span className="breadcrums"> "FIVER GRAFIC & DESIGN"</span>
          <h1>AI Artists</h1>
          <p>
            {" "}
            Exprolre your boundaries with our best Ai Animation tolls that you
            would never regerst
          </p>
          <div className="menu menuu d-flex justify-content-between">
            <div className="flex d-flex gap-2">
              <span className=" align-center flex d-flex">Budget</span>
              <input
                name="min"
                onChange={(e) => setminPrice(e.target.value)}
                value={minPrice}
                className="p-2"
                type="text"
                placeholder="min"
              />
              <input
                name="max"
                onChange={(e) => setmaxPrice(e.target.value)}
                value={maxPrice}
                type="text"
                placeholder="max"
              />
              <button onClick={handleFilter} className="btn btn-primary">
                {" "}
                Apply
              </button>
            </div>
            <div className="fs-6 w-full">
              <span>Sort by: </span>
              <select className="fs-6">
                <option>price</option>
                <option>new</option>
                <option>Old</option>
              </select>
            </div>
          </div>
        </div>
        {Gigs.length < 1 && (
          <h5 style={{ color: "red", margin: "1rem 2rem" }}>No Gigs Found</h5>
        )}
        <div className=" allGigs  gap-3 flex-wrap">
          {Gigs.map((e) => {
            return (
              <div className="">
                <GigCard item={{ ...e }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gigs;

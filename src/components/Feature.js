import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchGigByCategoryAsync } from "../redux/gigs/gigSice";
import { Link, useNavigate } from "react-router-dom";

const Feature = () => {
  const { Gigs } = useSelector((state) => state.gig);
  const [searchedText, setsearchedText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {
    navigate("/gigs/?search=" + searchedText);
    let formdata = {
      search: searchedText,
    };
    dispatch(fetchGigByCategoryAsync(formdata));
  };

  const hanldeCatBtn = (g) => {
    navigate(`gigs/?&cat=${g}`);
    let formdata = {
      cat: g,
    };
    dispatch(fetchGigByCategoryAsync(formdata));
  };
  const uniqueGigs = [...new Set(Gigs.map((g) => g.cat))];

  return (
    <>
      <div className="container sm-feature flex  d-flex">
        <div className="main-right m-auto  ">
          <div className="main-heading m-2">
            Find the perfect <span className="frelance">freelace</span> services
            for you bussniess
          </div>
          <div className="main-search flex d-flex justify-content-center align-items-center">
            <FaSistrix size="2rem" className="main-icon -2-mr" />

            <input
              className="form-control px-5 m-2 search-input"
              type="text"
              name="search"
              value={searchedText}
              onChange={(e) => setsearchedText(e.target.value)}
            />

            <button onClick={handleSearch} className=" search-btn">
              {" "}
              Search
            </button>
          </div>
          <div className="main-popular m-2 ">
            <span className="popular-text">Popular : </span>
            {uniqueGigs?.slice(0, 5).map((g) => (
              <button
                onClick={() => hanldeCatBtn(g)}
                className="bg-light popular-btn"
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div className="main-left  ">
          <img className="imgd sm-img " src="img/man.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Feature;

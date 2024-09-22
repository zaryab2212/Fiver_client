import React, { useEffect, useState } from "react";
import "./home.css";
import Feature from "../components/Feature";
import TrustedBy from "../components/TrustedBy";
import { FaAngellist, FaBookmark } from "react-icons/fa";
import { fetchGigByCategoryAsync, getAllGigAsync } from "../redux/gigs/gigSice";

import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { Gigs } = useSelector((state) => state.gig);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const handleCat = (at) => {
    navigate(`/gigs/?&cat=${at.cat}`);
    let formdata = {
      cat: at.cat,
    };
    dispatch(fetchGigByCategoryAsync(formdata));
  };

  const gigMap = Gigs.map((g) => {
    return { cat: g.cat, image: g.image };
  });

  const uniqueGigs = gigMap.filter(
    (gig, index, self) => index === self.findIndex((t) => t.cat === gig.cat)
  );
  useEffect(() => {
    dispatch(getAllGigAsync());
  }, []);

  return (
    <>
      <div className="">
        <div className="  containerflex d-flex  flex-column gap-5">
          <Feature />
          <TrustedBy />
          {/* 
          Gigs */}
          <div className="flex justify-content-center align-items-center d-flex gap-2 flex-wrap">
            {" "}
            {uniqueGigs?.map((e) => {
              return (
                <div onClick={() => handleCat(e)}>
                  <Card data={e} />
                </div>
              );
            })}
          </div>
        </div>

        <div className=" sm-dec mt-5 flex   w-100 bg-light bg-gradient d-flex justify-content-center align-items-center">
          <div className="items flex-shrink-2 sm-vid px-4 m-2">
            <h2>A whole world of freelance talent at your fingure tips</h2>
            <div className="title flex flex-column gap-3">
              <FaBookmark /> <b> The best for every budget </b>
              <p>
                Find high-Quality services at every price point. No hourly
                rates, just project-based pricing
              </p>
            </div>
            <div className="title flex flex-column gap-3">
              <FaBookmark /> <b> The best for every budget </b>
              <p>
                Find high-Quality services at every price point. No hourly
                rates, just project-based pricing
              </p>
            </div>
            <div className="title flex  flex-column gap-3">
              <FaBookmark /> <b> The best for every budget </b>
              <p>
                Find high-Quality services at every price point. No hourly
                rates, just project-based pricing
              </p>
            </div>
          </div>

          <video className="vid m-4 " src="#" controls></video>
        </div>
        <div className="container  m-auto bg-light">
          <div className="flex p-3 sm-fiver-bussniess d-flex gap-5  h-6 bg-primar mt-3 align-content-center justify-content-center">
            <div className="m-auto">
              <h2>fiver bussniess</h2>
              <h2>a bussnies solution design for items</h2>
              <p>
                Under to curated experiance packed with tools and benefits,
                dedicated to bussniesses
              </p>
              <div className="title flex d-flex gap-3">
                <FaAngellist /> contact to freelance with proven bussnies
                experiance
              </div>
              <div className="title flex d-flex gap-3">
                <FaAngellist /> Get match with the home work that you need to
                required to be done
              </div>
              <div className="title flex d-flex gap-3">
                <FaAngellist /> Say hello to the world and enjoy your life every
                day
              </div>
            </div>

            <img
              className="d-flex bussniess-img flex justify-content-start"
              src="img/download.jfif"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

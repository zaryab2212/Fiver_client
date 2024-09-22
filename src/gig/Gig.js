import React, { useEffect } from "react";
import "./gig.css";
import {
  FaClock,
  FaPushed,
  FaRegStar,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";
import { Slider } from "infinite-react-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllGigAsync, getSingleGigAsync } from "../redux/gigs/gigSice";
import { useParams } from "react-router-dom";
import { getSingleGig } from "../redux/gigs/gigApi";

const Gig = () => {
  const { newGig } = useSelector((state) => state.gig);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    dispatch(getSingleGigAsync(id));
  }, []);
  return (
    <>
      <div className="gig">
        <div className="container gig">
          <div className="left">
            <span className="breadcrumps"> FIVER + " " +GRAPHICS & DESIGN</span>
            <h1>{newGig?.shortDesc}</h1>
            {newGig && (
              <>
                <div className="flex d-flex gap-3 ">
                  <div>
                    {" "}
                    <img
                      className="pp"
                      src={newGig.userId?.image || "img/man.png"}
                      alt="userimag"
                    />
                  </div>
                  <div>
                    {" "}
                    <div>{newGig.userId?.userName}</div>
                    <div className="stars">
                      {new Array(5).fill(1).map((u) => {
                        return <FaRegStar className="text-warning " />;
                      })}

                      <span>{newGig.starNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="slider">
                  <img
                    className="rounded-3"
                    src={newGig.image}
                    alt="slider img"
                  />
                </div>

                <h2>{newGig.title}</h2>
                <p>{newGig.desc}</p>
                <div className="seller">
                  <h2>About this Seller</h2>
                  <div className="user">
                    <img
                      src={newGig.userId?.image || "img/man.png"}
                      alt="user ig"
                    />
                    <div className="info">
                      <span>{newGig?.userId?.userName}</span>
                      <div className="stars">
                        {new Array(5).map((e) => {
                          return <FaRegStar />;
                        })}

                        <span>{newGig.starNumber}</span>
                      </div>
                      <button className="user-button"> Contact Me</button>
                    </div>
                  </div>
                  <div className="box">
                    <div className="items">
                      <div className="item">
                        <span className="title">From</span>
                        <span className="desc">{newGig?.userId?.country}</span>
                      </div>
                      <div className="item">
                        <span className="title">Member Scince</span>
                        <span className="desc"></span>5 jan, 2023
                      </div>
                      <div className="item">
                        <span className="title">Avg. Response Time</span>
                        <span className="desc">{newGig.responseTime}</span>
                      </div>
                      <div className="item">
                        <span className="title">Last Deleviry</span>
                        <span className="desc">US</span>
                      </div>
                      <div className="item">
                        <span className="title">Languages</span>
                        <span className="desc">US</span>
                      </div>
                      <div className="item">
                        <span className="title">From</span>
                        <span className="desc">{newGig?.userId?.country}</span>
                      </div>
                    </div>
                    <hr />
                    <p>{newGig?.userId?.desc} </p>
                  </div>
                  <div className="reviews">
                    <h2>Reviews</h2>
                    <div className="ite">
                      <div className="user">
                        <img className="user-pp" src={newGig.userId?.image} />
                        <div className="info">
                          <span className="">{newGig.userId?.userName}</span>
                          <div className="country">
                            <img src="img/man.png" alt="country flag" />
                            <span className="">{newGig.userId?.userName}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="stars">
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                          <span>5</span>
                        </div>
                        <p>
                          {" "}
                          this woudl be the logn paraghraph i would appericite
                          taht you need this one any gow
                        </p>
                        <div className="helpful">
                          <span>Helpfull ?</span>
                          <span>
                            <FaRegThumbsUp width={6} height={6} />
                          </span>
                          <span>yes!</span>
                          <span>
                            <FaRegThumbsDown width={6} height={6} />
                          </span>
                          <span>No!</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="right">
            <div className="price">
              <h3>{newGig.shortDesc}</h3>
              <h3>
                {" "}
                <b style={{ color: "red" }}>{newGig.price}$</b>{" "}
              </h3>
            </div>
            <p> {newGig.desc}</p>
            <div className="details">
              <div className="time">
                <FaClock />
                <span>{newGig.deliveryTime}</span>
              </div>
              <div className="revesion">
                <FaPushed />
                <span>{newGig.revesionNumber}</span>
              </div>
            </div>
            <div className="features">
              <div className="feature-item">
                <FaPushed />
                <span>Peompt Wriiting</span>
              </div>
              <div className="feature-item">
                <FaPushed />
                <span>Peompt Wriiting</span>
              </div>
              <div className="feature-item">
                <FaPushed width={9} height={9} />
                <span>Peompt Wriiting</span>
              </div>
            </div>
            <button className="btn w-100 mt-2 btn-success">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gig;

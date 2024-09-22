import React, { useEffect } from "react";
import "./mygig.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllGigAsync, removeGigAsync } from "../redux/gigs/gigSice";

const MyGig = () => {
  const dispatch = useDispatch();

  const handleDeleteGig = (id) => {
    //dispatch delete gig func
    dispatch(removeGigAsync(id));
  };

  const { Gigs } = useSelector((state) => state.gig);
  useEffect(() => {
    dispatch(getAllGigAsync());
  }, [dispatch]);
  return (
    <>
      <div className="myGig">
        <div className="container flex align-items-center">
          <div className="title d-flex align-items-center mt-3 justify-content-between">
            <h1>All of the gig information </h1>
            <Link to="/add-gig">
              <button className="btn btn-success w-100">Add New Gig</button>
            </Link>
          </div>
          <table className="flex flex-column  justify-content-between  d-flex">
            <tr className="flex d-flex justify-content-between fs-5 align-items-center p-3 m-3">
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Action</th>
            </tr>
            {/* flex d-flex justify-content-between  fs-6 align-items-center p-2 m-3 mt-0 */}
            {Gigs.map((Gig) => {
              return (
                <div className="grid col-12 fs-6 m-2 p-4">
                  <td className="col-2">
                    <img
                      className="rounded-5 w-50 "
                      src={Gig?.image}
                      alt="gigtable"
                    />
                  </td>
                  <td className="col-6"> {Gig?.title}</td>
                  <td className="col-2">{Gig?.price}</td>
                  <td className="col-2">{Gig?.sales}</td>
                  <td className="col-2">
                    <button
                      onClick={() => handleDeleteGig(Gig._id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </div>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default MyGig;

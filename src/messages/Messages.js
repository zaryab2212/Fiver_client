import React from "react";
import "./messages.css";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <>
      {" "}
      <div className="messages">
        <div className="container flex align-items-center">
          <div className="title d-flex align-items-center justify-content-between">
            <h1>Messages</h1>
            <Link to="#">
              <button className="btn btn-success">Add New message</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <td>
              <img
                className="userProfileImg"
                src="/img/man.png"
                alt="gigtable"
              />
            </td>
            <td>
              <Link to="#">this woud be the message...</Link>
            </td>
            <td> 10 nov </td>

            <td>
              <button className="btn btn-danger">Delete </button>
            </td>
          </table>
        </div>
      </div>
    </>
  );
};

export default Messages;

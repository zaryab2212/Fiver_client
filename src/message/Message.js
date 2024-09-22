import React from "react";
import "./message.css";

const Message = () => {
  return (
    <div className="container">
      <div className="messsages">
        <div className="item ">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you</p>
        </div>
        <div className="  item owner ">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you by owner</p>
        </div>
        <div className="item  ">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you</p>
        </div>
        <div className="  item owner ">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you by owner</p>
        </div>
        <div className="item  align-items-center">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you</p>
        </div>
        <div className="  item owner align-items-center">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you by owner</p>
        </div>
        <div className="item  align-items-center">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you</p>
        </div>
        <div className="  item owner align-items-center">
          <img src="/img/man.png" alt="user photo" />
          <p> hi im texting you by owner</p>
        </div>
      </div>
      <div className="write d-flex align-items-center justify-content-spacebetween">
        <textarea
          name=""
          placeholder="write a text here.."
          id=""
          cols="30"
          rows="20"
        >
          {" "}
        </textarea>
        <button className="btn btn-primary ">send</button>
      </div>
    </div>
  );
};

export default Message;

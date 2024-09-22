import React from "react";
import {
  FaApplePay,
  FaFacebookSquare,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

const TrustedBy = () => {
  return (
    <div className="container flex d-flex justify-content-center align-items-center pt-2 gap-2 trusted bg-light">
      <FaGoogle className="mx-3" size="3rem" />

      <FaFacebookSquare className="mx-3" size="3rem" />

      <FaTwitter className="mx-3" size="3rem" />

      <FaApplePay className="mx-3" size="6rem" />
    </div>
  );
};

export default TrustedBy;

import React from "react";
import Slider from "infinite-react-carousel";
import Card from "../Card";

const Sliderr = ({ my }) => {
  return (
    <Slider arrowsScroll={3} slidesPerRow={3}>
      <div>
        <Card data={{ ...my }} />;
      </div>
    </Slider>
  );
};

export default Sliderr;

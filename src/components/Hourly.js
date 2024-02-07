import { Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card/Card";
import moment from "moment-timezone";
const Hourly = ({ wether, timezone }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          background: "green",
          marginLeft: "30px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const hourly = wether;
  // console.log("Wethor", wether);

  return (
    <>
      <Box mt={"10px"} ml={{ base: "-10px", md: "0px", lg: "0px" }} p={"5px"}>
        <Slider {...settings}>
          {hourly.map((current) => {
            const timeStr = moment
              .tz(current.dt * 1000, "Asia/Kolkata")
              .format("h:mm a");
            return (
              <div key={current.dt}>
                <Card
                  wether={current}
                  temp={current.temp}
                  timeStr={timeStr}
                  key={timeStr}
                />
              </div>
            );
          })}
        </Slider>
      </Box>
    </>
  );
};

export default Hourly;

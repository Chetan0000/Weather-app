import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpoint,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import Card from "./Card/Card";
import moment from "moment-timezone";
import { FaCloudMoon } from "react-icons/fa";
import {
  FaArrowDownLong,
  FaArrowTrendDown,
  FaArrowUpLong,
  FaDroplet,
} from "react-icons/fa6";
import {
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
  IoMdRainy,
} from "react-icons/io";
import { WiSunrise, WiSunset } from "react-icons/wi";

import { GiSunrise, GiSunset } from "react-icons/gi";

import { WiDayCloudy } from "react-icons/wi";
import { FiSun } from "react-icons/fi";
import { BsArrowUpLeftCircleFill } from "react-icons/bs";

const Daily = ({ wether, timezone }) => {
  const backdropColor = useColorModeValue("white");
  const isMobile = useBreakpoint("base");

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    slidesToShow: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          //   infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          //   initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box pb={"20px"}>
      <Text
        fontSize={{ base: "22px", md: "24px", lg: "26px" }}
        fontWeight={"semibold"}
        textAlign={{ base: "start", md: "center", lg: "center" }}
        p={"10px"}
      >
        Daily Forecast
      </Text>

      <Box>
        <Box mt={"10px"} ml={{ base: "-10px", md: "0px", lg: "0px" }} p={"5px"}>
          <Slider {...settings}>
            {wether.map((current) => {
              const timeStr = moment
                .tz(current.dt * 1000, "Asia/Kolkata")
                .format("dddd");
              return (
                <div key={current.dt}>
                  <Box cursor={"pointer"} onClick={onOpen}>
                    <Card
                      wether={current}
                      timeStr={timeStr.substring(0, 3)}
                      temp={current.temp.day}
                    />
                  </Box>
                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    // colorScheme="orange"
                    size={"3xl"}
                    // autoFocus={"false"}
                    backdrop={false}
                    // blockScrollOnMount={"false"}
                  >
                    <ModalOverlay
                    // backdropBrightness={"100%"}
                    // bg={backdropColor}
                    // opacity={isMobile ? 0.9 : 0.8}
                    // backdropFilter="blur(2px)"
                    />
                    <ModalContent>
                      <ModalHeader display={"flex"}>
                        {" "}
                        {moment
                          .tz(current.dt * 1000, "Asia/Kolkata")
                          .format("ddd D/M/YY")}
                        <Image
                          mt={"-30px"}
                          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                        ></Image>
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text mt={"-30px"} pb={"30px"}>
                          {current.summary}
                        </Text>
                        <Box
                          display={"flex"}
                          flexDirection={"row"}
                          gap={"10px"}
                          color={"gray"}
                        >
                          <Box
                            borderRight={"1px solid silver"}
                            w={"50%"}
                            pr={"10px"}
                          >
                            <Box>
                              <div className="flex gap-[5px] justify-between">
                                <h4 className="flex items-center">
                                  {" "}
                                  <IoIosArrowRoundDown size={20} />
                                  Min:{" "}
                                </h4>
                                <p className="font-semibold">
                                  {" "}
                                  {`${Math.floor(current.temp.min)}\u00B0`}
                                </p>
                              </div>
                              <div className="flex gap-[5px] justify-between">
                                <h4 className="flex items-center">
                                  {" "}
                                  <IoIosArrowRoundUp size={20} />
                                  Max:{" "}
                                </h4>
                                <p className="font-semibold">
                                  {" "}
                                  {`${Math.floor(current.temp.max)}\u00B0`}
                                </p>
                              </div>
                              <div className="flex gap-[5px] justify-between">
                                <h4 className="flex items-center">
                                  {" "}
                                  <WiDayCloudy size={20} />
                                  Day:{" "}
                                </h4>
                                <p className="font-semibold">
                                  {" "}
                                  {`${Math.floor(current.temp.day)}\u00B0`}
                                </p>
                              </div>
                              <div className="flex gap-[5px] justify-between">
                                <h4 className="flex items-center">
                                  {" "}
                                  <GiSunrise size={20} />
                                  Morning:{" "}
                                </h4>
                                <p className="font-semibold">
                                  {" "}
                                  {`${Math.floor(current.temp.morn)}\u00B0`}
                                </p>
                              </div>
                              <div className="flex gap-[5px] justify-between">
                                <h4 className="flex items-center">
                                  <GiSunset size={20} />
                                  Evening:{" "}
                                </h4>
                                <p className="font-semibold">
                                  {" "}
                                  {`${Math.floor(current.temp.eve)}\u00B0`}
                                </p>
                              </div>
                              <div className="flex gap-[5px] justify-between">
                                <h4 className="flex items-center">
                                  {" "}
                                  <FaCloudMoon size={20} />
                                  Night:{" "}
                                </h4>
                                <p className="font-semibold">
                                  {" "}
                                  {`${Math.floor(current.temp.night)}\u00B0`}
                                </p>
                              </div>
                            </Box>
                          </Box>
                          <Box w={"50%"}>
                            <div className="flex gap-[5px] justify-between">
                              <h4 className="flex items-center">
                                <WiSunrise size={20} /> Sunrise:{" "}
                              </h4>
                              <p className="font-semibold">
                                {" "}
                                {moment
                                  .tz(current.sunrise * 1000, "Asia/Kolkata")
                                  .format("h:mm a")}
                              </p>
                            </div>
                            <div className="flex gap-[5px] justify-between">
                              <h4 className="flex items-center">
                                <WiSunset size={20} /> sunset:{" "}
                              </h4>
                              <p className="font-semibold">
                                {" "}
                                {moment
                                  .tz(current.sunset * 1000, "Asia/Kolkata")
                                  .format("h:mm a")}
                              </p>
                            </div>
                            <div className="flex gap-[5px] justify-between">
                              <h4 className="flex items-center">
                                <FaDroplet /> Humidity:{" "}
                              </h4>
                              <p className="font-semibold">
                                {current.humidity}%
                              </p>
                            </div>
                            <div className="flex gap-[5px] justify-between">
                              <h4 className="flex items-center">
                                <FaArrowTrendDown /> Pressure:{" "}
                              </h4>
                              <p className="font-semibold">
                                {current.pressure} hpa
                              </p>
                            </div>
                            <div className="flex gap-[5px] justify-between">
                              <h4 className="flex items-center">
                                <IoMdRainy /> Rain:{" "}
                              </h4>
                              <p className="font-semibold">{current.rain}0 %</p>
                            </div>
                            <div className="flex gap-[5px] justify-between">
                              <h4 className="flex items-center">
                                <FiSun /> UV index:{" "}
                              </h4>
                              <p className="font-semibold">{current.uvi}</p>
                            </div>
                            <div className="flex gap-[5px] justify-between">
                              <h4 className="flex items-center">
                                <BsArrowUpLeftCircleFill /> Wind:{" "}
                              </h4>
                              <p className="font-semibold">
                                {current.wind_speed}
                              </p>
                            </div>
                          </Box>
                        </Box>
                      </ModalBody>

                      <ModalFooter>
                        {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button> */}
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Daily;

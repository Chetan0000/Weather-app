import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdRainy } from "react-icons/io";
import { BsArrowUpLeftCircleFill } from "react-icons/bs";
import { WiSunrise } from "react-icons/wi";
import { MdSunnySnowing } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import Hourly from "./Hourly";
const SubMain = ({ wether, hourly, timezone, current }) => {
  const [clock, setClock] = useState();
  // const [timezone, setTimeZone] = useState("");

  const time = () => {
    setClock(moment().tz("Asia/Kolkata").format("h:mm A"));
  };

  setInterval(() => {
    time();
  }, 10000);
  useEffect(() => {
    time();
  }, []);

  return (
    <>
      {wether ? (
        <>
          <Box
            w={"100%"}
            h={{ base: "500px", md: "100%", lg: "100%" }}
            // border={"1px solid black"}
            // pr={"5px"}
            pt={"20px"}
          >
            <Box
              textAlign={{ base: "end", md: "center", lg: "center" }}
              pr={"5px"}
            >
              <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
                {clock}
              </Text>
            </Box>

            <Box
              className="MAX_MIN"
              display={"flex"}
              gap={"20px"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={{ base: "-30px", md: "20px", lg: "20px" }}
              textAlign={"center"}
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              pb={{ base: "20px", md: "10px", lg: "10px" }}
            >
              <Box className="MIN" display={"flex"} alignItems={"center"}>
                <Text>
                  <FaArrowDownLong />
                </Text>
                <Box>
                  <Text>Min</Text>
                  <Text
                    fontWeight={"medium"}
                  >{`${wether.main.temp_min}\u00B0`}</Text>
                </Box>
              </Box>

              <Box className="MAX" display={"flex"} alignItems={"center"}>
                <Text>
                  <FaArrowUpLong />
                </Text>
                <Box>
                  <Text>Max</Text>
                  <Text
                    fontWeight={"medium"}
                  >{`${wether.main.temp_max}\u00B0`}</Text>
                </Box>
              </Box>
            </Box>

            <Box
              p={"5px"}
              // pr={"10px"}
              fontSize={{ base: "16px", md: "16px", lg: "20px" }}
              display={"flex"}
              flexDirection={"column"}
              gap={{ base: "5px", md: "4px", lg: "5px" }}
            >
              {/* rain */}
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text display={"flex"} alignItems={"center"} gap={"5px"}>
                  <IoMdRainy color={"#83B4CF"} /> Chance of rain
                </Text>

                <Text fontWeight={"semibold"}>0 %</Text>
              </Box>
              {/* wind */}
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text display={"flex"} alignItems={"center"} gap={"5px"}>
                  <BsArrowUpLeftCircleFill /> Wind
                </Text>

                <Text fontWeight={"semibold"}>{current.wind_speed} m/s</Text>
              </Box>
              {/*  */}
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text display={"flex"} alignItems={"center"} gap={"5px"}>
                  <WiSunrise color="rgb(255,199,86)" size={20} />
                  Sunrise
                </Text>

                <Text fontWeight={"semibold"}>
                  {moment
                    .tz(wether.sys.sunrise * 1000, "Asia/Kolkata")
                    .format("h:mm a")}
                </Text>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text display={"flex"} alignItems={"center"} gap={"5px"}>
                  <MdSunnySnowing color="#486FBF" />
                  Sunset
                </Text>

                <Text fontWeight={"semibold"}>
                  {" "}
                  {moment
                    .tz(wether.sys.sunset * 1000, "Asia/Kolkata")
                    .format("h:mm a")}
                </Text>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text display={"flex"} alignItems={"center"} gap={"5px"}>
                  <FiSun color="#FBA087" />
                  UV index
                </Text>

                <Text fontWeight={"semibold"}>{current.uvi}</Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text display={"flex"} alignItems={"center"} gap={"5px"}>
                  <FaArrowTrendDown color="#D987E9" />
                  Pressure
                </Text>

                <Text fontWeight={"semibold"}>{current.pressure} hpa</Text>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text display={"flex"} alignItems={"center"} gap={"5px"}>
                  <FaDroplet color="#6BBBEA" />
                  Humidity
                </Text>

                <Text fontWeight={"semibold"}>{current.humidity} %</Text>
              </Box>

              {/* <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text display={"flex"} alignItems={"center"} gap={"5px"}>
            <FaWind color="#87E48C" />
            Gusts
          </Text>

          <Text fontWeight={"semibold"}>120 km/h</Text>
        </Box> */}
            </Box>
            <Box
              mt={"20px"}
              display={"flex"}
              flexDirection={"column"}
              // alignItems={"center"}
            >
              <Text
                fontSize={{ base: "22px", md: "24px", lg: "26px" }}
                fontWeight={"semibold"}
                textAlign={{ base: "start", md: "center", lg: "center" }}
                p={"10px"}
              >
                Hourly Forecast
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                // alignItems={"center"}
                w={"100%"}
                // border={"1px solid black"}
              >
                <Hourly wether={hourly} timezone={timezone} />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SubMain;

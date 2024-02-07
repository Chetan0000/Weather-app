import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { WeatherState } from "../Context/weatherprovider";
import {
  FaArrowDownLong,
  FaArrowLeftLong,
  FaArrowTrendDown,
  FaArrowUpLong,
  FaDroplet,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowRoundDown, IoIosCloudyNight } from "react-icons/io";
import { WiDayCloudy, WiDaySunny, WiSunrise } from "react-icons/wi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { TbSunset2 } from "react-icons/tb";
import {
  BsArrowUpLeftCircleFill,
  BsCloudLightningRainFill,
} from "react-icons/bs";
const DaysPage = ({}) => {
  const { currentWeather, place } = WeatherState();

  console.log("currentWeather", currentWeather);
  const navigate = useNavigate();
  const [day, setDay] = useState();
  // ------- if data is not provided push back to home page ----------------
  if (!currentWeather) {
    navigate("/");
    return;
  }

  // setDay(
  //   moment.tz(currentWeather.dt * 1000, "Asia/Kolkata").format("ddd D/M/YY")
  // );
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      h={"100vh"}
      bg={"#E9E9E9"}
      color={"rgb(105,105,105)"}
    >
      <Box
        w={{ base: "100vw", md: "90vw", lg: "90vw" }}
        minH={{ base: "100vh", md: "90vh", lg: "90vh" }}
        bg={"white"}
        borderRadius={{ base: "0px", md: "25px", lg: "30px" }}
        // border={"1px solid black"}
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
      >
        {/* ------------ Back Button ---------------- */}
        <Box pt={"15px"} pl={"15px"}>
          <Text
            cursor={"pointer"}
            onClick={() => {
              navigate(-1);
            }}
          >
            <FaArrowLeftLong />
          </Text>
        </Box>

        {/* -------------  content ------------- */}

        <Box
          w={"100%"}
          h={"90%"}
          // border={"1px solid black"}
          px={{ base: "8px", md: "0px", lg: "0px" }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={{
              base: "space-between",
              md: "start",
              lg: "start",
            }}
            gap={{ base: "0px", md: "40px", lg: "50px" }}
            pl={"15px"}
          >
            <Text
              fontSize={{ base: "18px", md: "25px", lg: "25px" }}
              fontWeight={"semibold"}
            >
              {moment
                .tz(currentWeather.dt * 1000, "Asia/Kolkata")
                .format("dddd D/M/YY")}
            </Text>

            <Text
              fontSize={{ base: "18px", md: "25px", lg: "25px" }}
              fontWeight={"semibold"}
              display={"flex"}
              alignItems={"center"}
            >
              <IoLocationSharp />
              {place}
            </Text>
          </Box>

          {/* ------- Temp ------ */}

          <Box
            mt={{ base: "15px", md: "20px", lg: "30px" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                w={{ base: "75px", md: "100px", lg: "120px" }}
                src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              ></Image>
              <Text
                fontSize={{ base: "35px", md: "45px", lg: "50px" }}
                fontWeight={"bold"}
              >{`${currentWeather.temp.day}\u00B0`}</Text>
            </Box>

            <Text
              fontSize={{ base: "16px", md: "20px", lg: "22px" }}
              fontWeight={"semibold"}
            >
              {currentWeather.summary}
            </Text>
          </Box>

          <Box
            mt={{ base: "30px", md: "10px", lg: "0px" }}
            minH={"370px"}
            // border={"1px solid black"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <div className="grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4  p-[20px] w-[90%] md:w-[85%] lg:w-[85%] absolute m-auto">
              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px] justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                >
                  <FaArrowDownLong />{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Min{" "}
                    <Text
                      fontWeight={"semibold"}
                    >{`${currentWeather.temp.min}\u00B0`}</Text>
                  </Text>
                </Text>
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                >
                  <FaArrowUpLong />{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Max{" "}
                    <Text
                      fontWeight={"semibold"}
                    >{`${currentWeather.temp.max}\u00B0`}</Text>
                  </Text>
                </Text>
              </div>
              {/* ----------- day ------------ */}
              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px] justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "60px" }}>
                    <WiDayCloudy />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Day{" "}
                    <Text
                      fontWeight={"semibold"}
                    >{`${currentWeather.temp.day}\u00B0`}</Text>
                  </Text>
                </Text>
              </div>

              {/* ---------- Morning temp  --------- */}

              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px] justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "55px" }}>
                    <GiSunrise />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Morning{" "}
                    <Text
                      fontWeight={"semibold"}
                    >{`${currentWeather.temp.morn}\u00B0`}</Text>
                  </Text>
                </Text>
              </div>

              {/* Evening temp  */}
              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "55px" }}>
                    <GiSunset />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Evening{" "}
                    <Text
                      fontWeight={"semibold"}
                    >{`${currentWeather.temp.eve}\u00B0`}</Text>
                  </Text>
                </Text>
              </div>
              {/* -------- night temp ---- */}
              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "55px" }}>
                    <IoIosCloudyNight />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Night{" "}
                    <Text
                      fontWeight={"semibold"}
                    >{`${currentWeather.temp.night}\u00B0`}</Text>
                  </Text>
                </Text>
              </div>

              {/* - sunrise */}

              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "35px", md: "40px", lg: "55px" }}>
                    <WiSunrise />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Sunrise{" "}
                    <Text fontWeight={"semibold"}>
                      {moment
                        .tz(currentWeather.sunrise * 1000, "Asia/Kolkata")
                        .format("h:mm a")}
                    </Text>
                  </Text>
                </Text>
              </div>

              {/* ------- sunset -------- */}

              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "55px" }}>
                    <TbSunset2 />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Sunset{" "}
                    <Text fontWeight={"semibold"}>
                      {moment
                        .tz(currentWeather.sunset * 1000, "Asia/Kolkata")
                        .format("h:mm a")}
                    </Text>
                  </Text>
                </Text>
              </div>

              {/* --------- humidity --------- */}

              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "50px" }}>
                    <FaDroplet />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Humidity{" "}
                    <Text fontWeight={"semibold"}>
                      {currentWeather.humidity} %
                    </Text>
                  </Text>
                </Text>
              </div>

              {/* -------- pressure ---------- */}
              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "50px" }}>
                    <FaArrowTrendDown />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Pressure{" "}
                    <Text fontWeight={"semibold"}>
                      {currentWeather.pressure} hpa
                    </Text>
                  </Text>
                </Text>
              </div>

              {/* ----------- rain --------------- */}

              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "50px" }}>
                    <BsCloudLightningRainFill />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Rain{" "}
                    <Text fontWeight={"semibold"}>
                      {currentWeather.rain}0 %
                    </Text>
                  </Text>
                </Text>
              </div>

              {/* ---------- uvi index ----------- */}

              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "50px" }}>
                    <WiDaySunny />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    UV Index{" "}
                    <Text fontWeight={"semibold"}>{currentWeather.uvi}</Text>
                  </Text>
                </Text>
              </div>

              {/* ---------- wind ***** */}
              <div className="md:w-[150px] lg:w-[200px] w-[140px] bg-[#E8E9EB] flex gap-[5px]  border-[1px] border-gray-300 rounded-[8px]  justify-center">
                <Text
                  display={"flex"}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "30px", md: "40px", lg: "50px" }}>
                    <BsArrowUpLeftCircleFill />
                  </Text>{" "}
                  <Text display={"flex"} flexDirection={"column"}>
                    Wind{" "}
                    <Text fontWeight={"semibold"}>
                      {currentWeather.wind_speed} m/s
                    </Text>
                  </Text>
                </Text>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DaysPage;

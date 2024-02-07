import { Box, Spinner, flexbox } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Main from "../../components/main";
import SubMain from "../../components/SubMain";
import Daily from "../../components/Daily";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Home = () => {
  const [search, setSearch] = useState("hyderabad");
  const [dayData, setDayData] = useState();
  const [unit, setUnit] = useState("metric");
  const [hourlyData, setHourlyData] = useState();
  // const [timeZone, setTimeZone] = useState("");
  const [dailyData, setDailyData] = useState();
  const [place, setPlace] = useState();
  const [current, setCurrent] = useState();

  const toast = useToast();

  useEffect(() => {
    handelSearch();
  }, [unit]);
  let timeZone = "";

  // function to fetch data from api --------
  const handelSearch = async () => {
    let key = "bangalore";
    if (key != search && search.length > 0) {
      key = search;
    }
    console.log("Check");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${key}&appid=069c7f0ed00511e651c214a8f3f2345d&units=${unit}`;
    //
    let lat = 0;
    let lon = 0;
    try {
      const { data } = await axios.get(url);
      // let data = await fetch(url);
      // const json = data.response.json();
      console.log(data);
      setDayData(data);
      setPlace(data.name);
      setSearch("");
      lon = data.coord.lon;
      lat = data.coord.lat;

      const oneData = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=069c7f0ed00511e651c214a8f3f2345d&units=${unit}`
      );
      console.log(oneData.data);
      setCurrent(oneData.data.current);
      setHourlyData(oneData.data.hourly);
      setDailyData(oneData.data.daily);
      timeZone += oneData.data.timezone;
    } catch (error) {
      console.log(error);
      toast({
        title: error.response.data.message,
        position: "top",
        variant: "subtle",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
      return;
    }
    // await fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setDayData(json);
    //     setPlace(json.name);
    //     setSearch("");
    //     lon = json.coord.lon;
    //     lat = json.coord.lat;
    //   })
    //   .catch((error) => console.error(error));

    // if (lat != 0 && lon != 0) {
    //   await fetch(
    //     `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=069c7f0ed00511e651c214a8f3f2345d&units=${unit}`
    //   )
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setCurrent(json.current);
    //       setHourlyData(json.hourly);
    //       setDailyData(json.daily);
    //       timeZone += json.timezone;

    //       // console.log("time zone", json.timezone);
    //       // console.log("time", typeof timeZone);

    //       console.log(json);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       return;
    //     });
    // } else {
    //   return;
    // }
  };
  return (
    <>
      <Box
        Box
        w={"100vw"}
        h={"100vh"}
        bg={"#E9E9E9"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {current ? (
          <>
            <Box
              w={{ base: "100vw", md: "90vw", lg: "90vw" }}
              h={{ base: "100vh", md: "90vh", lg: "90vh" }}
              color={"rgb(105,105,105)"}
              display={"flex"}
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              // border={"5px solid red"}
              // justifyContent={"center"}
              m={"auto"}
              bg={"#FAFAFA"}
              borderRadius={{ base: "0px", md: "25px", lg: "30px" }}
              // p={"10px"}
              // border={"5px solid red"}
            >
              {/* Header */}
              <Box
                w={{ base: "100%", md: "73%", lg: "73%" }}
                // border={"1px solid red"}
                p={"10px"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  w={"100%"}
                  // alignItems={"center"}
                >
                  <Main
                    search={search}
                    setSearch={setSearch}
                    handelSearch={handelSearch}
                    wether={dayData}
                    setUnit={setUnit}
                    name={place}
                    current={current}
                  />
                  {dailyData ? (
                    <Box
                      // border={"1px solid"}
                      w={"100%"}
                      display={{ base: "none", md: "flex", lg: "flex" }}
                      // justifyContent={"center"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      pt={"20px"}
                    >
                      <Box w={"80%"}>
                        <Daily
                          wether={dailyData.slice(1, 13)}
                          timezone={timeZone}
                        />
                      </Box>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>

              <Box
                w={{ base: "100%", md: "28%", lg: "28%" }}
                // minH={"100px"}
                bg={"#F6F6F6"}
                borderTopRightRadius={{ base: "0px", md: "25px", lg: "30px" }}
                borderBottomRightRadius={{
                  base: "0px",
                  md: "25px",
                  lg: "30px",
                }}
                // border={"1px solid black"}
              >
                {hourlyData.length > 0 ? (
                  <>
                    <SubMain
                      wether={dayData}
                      hourly={hourlyData.slice(1, 13)}
                      timeZone={timeZone}
                      current={current}
                    />
                  </>
                ) : (
                  <></>
                )}
              </Box>
              {dailyData ? (
                <Box
                  // border={"1px solid"}
                  w={"100vw"}
                  display={{ base: "flex", md: "none", lg: "none" }}
                  // justifyContent={"center"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  // pt={"20px"}
                >
                  <Box w={"100vw"}>
                    <Daily
                      wether={dailyData.slice(1, 13)}
                      timezone={timeZone}
                    />
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </>
        ) : (
          <>
            <Box
              w={"100vw"}
              h={"100vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              // border={"3px solid red"}
            >
              <Spinner
                // thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;

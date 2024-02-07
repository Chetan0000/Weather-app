import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoSunny } from "react-icons/io5";
import moment from "moment-timezone";
const Card = ({ wether, temp, timeStr }) => {
  const [image, setImage] = useState(
    `https://openweathermap.org/img/wn/${wether.weather[0].icon}@2x.png`
  );

  return (
    <>
      <Box
        w={{ base: "83px", md: "88px", lg: "90px" }}
        h={"130px"}
        bg={"#E8E9EB"}
        borderRadius={"7px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{ base: "16px", md: "16px", lg: "20px" }}
        // p={"5px"}
      >
        <Text>{timeStr}</Text>

        <Box pt={"5px"} pb={"5px"} w={"60%"}>
          <Image w={"100%"} src={image}></Image>
        </Box>

        <Text>{`${Math.floor(temp)}\u00B0`}</Text>
      </Box>
    </>
  );
};

export default Card;

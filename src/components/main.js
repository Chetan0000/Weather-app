import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsWind } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { MdSettings } from "react-icons/md";
import { WeatherState } from "../Context/weatherprovider";
const Main = ({
  search,
  setSearch,
  handelSearch,
  wether,
  setUnit,
  name,
  current,
}) => {
  // const handelSearch = () => {};
  // const temp = wether.main.temp;
  // const [search, setSearch] = useState("");
  const [flipper, setFlipper] = useState(true);
  const { setPlace } = WeatherState();
  setPlace(name);
  return (
    <>
      <Box>
        {/* header */}

        <Box
          className="Header"
          display={"flex"}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          // border={"1px solid black"}
          pb={"5px"}
          py={"10px"}
          borderBottom={{ base: "1px solid silver", md: "none", lg: "none" }}
        >
          <Text
            pl={{ base: "2px", md: "7px", lg: "15px" }}
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            fontWeight={"semibold"}
          >
            {name}
          </Text>

          <Box
            w={"60%"}
            display={"flex"}
            gap={{ base: "5px", md: "10px", lg: "10px" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FormControl w={"100%"}>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Search.."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  _focusVisible={{
                    outline: "gray",
                  }}
                ></Input>
                <InputRightElement>
                  <Box onClick={handelSearch} cursor={"pointer"}>
                    <Text
                      fontSize={"20px"}
                      transitionDuration={"0.2s"}
                      _hover={{
                        fontSize: "22px",
                        transitionDuration: "0.2s",
                        transitionTimingFunction: "ease-in-out",
                      }}
                    >
                      <IoIosSearch />
                    </Text>
                  </Box>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Menu>
              <MenuButton
                border={"none"}
                as={IconButton}
                aria-label="Options"
                icon={<MdSettings size={25} />}
                variant="outline"
                transitionDuration={"0.2s"}
                colorScheme="black"
                bg={"white"}
                borderRadius={"100"}
                _hover={{
                  transform: "scale(1.1)",
                  transitionDuration: "0.2s",
                  transitionTimingFunction: "ease-in-out",
                  bg: "white",
                }}
              />
              <MenuList>
                <MenuItem
                  icon={<TbTemperatureCelsius size={20} />}
                  onClick={() => {
                    setUnit("metric");
                    setFlipper(true);
                  }}
                >
                  <Text
                    transitionDuration={"0.2s"}
                    _hover={{
                      transform: "scale(1.2)",
                      transitionDuration: "0.2s",
                      transitionTimingFunction: "ease-in-out",
                    }}
                  >
                    Celsius
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={<TbTemperatureFahrenheit size={20} />}
                  onClick={() => {
                    setFlipper(false);
                    setUnit("standard");
                  }}
                >
                  <Text
                    transitionDuration={"0.2s"}
                    _hover={{
                      transform: "scale(1.2)",
                      transitionDuration: "0.2s",
                      transitionTimingFunction: "ease-in-out",
                    }}
                  >
                    Fahrenheit
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Box
          w={"100%"}
          maxH={{ base: "50vh", md: "60vh", lg: "60vh" }}
          // border={"1px solid black"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={{ base: "start", md: "center", lg: "center" }}
          flexDirection={"column"}
          pb={"20px"}
        >
          <Box
            display={"flex"}
            alignItems={{ base: "center", md: "end", lg: "end" }}
            justifyContent={"center"}
            // border={"1px solid red"}
            w={{ base: "95vw", md: "100%", lg: "100%" }}
            pt={{ base: "0px", md: "20px", lg: "30px" }}
            gap={"10px"}
            // h={{ base: "40vh" }}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
          >
            <Text
              fontSize={{ base: "60px", md: "95px", lg: "135px" }}
              fontWeight={"medium"}
            >
              {`${current.temp}\u00B0`}
              <span className="text-[60px]  ">{flipper ? "C" : "F"}</span>
            </Text>

            {/* <Box
              className="Wind_Humidity"
              // border={"1px solid yellow"}
              display={{ base: "none", md: "flex", lg: "flex" }}
              flexDirection={{ base: "row", md: "column", lg: "column" }}
              gap={{ base: "10px", md: "5px", lg: "10px" }}
            >
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              >
                <BsWind />
                <span className="lg:text-[20px] md:text-[18px] sm:text-[16px]">
                  {wether.wind.speed}
                </span>
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              >
                <MdOutlineWaterDrop />
                <span className="lg:text-[20px] md:text-[18px] sm:text-[16px]">
                  {wether.main.humidity}
                </span>
              </Text>
            </Box> */}
          </Box>
          <Box
            textAlign={"center"}
            w={"100%"}
            pb={{ base: "0px", md: "20px", lg: "30px" }}
          >
            <Text
              fontSize={{ base: "18px", md: "25px", lg: "30px" }}
              //   fontWeight={""}
            >
              {current.weather[0].description}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Main;

{
  /* <BsWind />; */
}

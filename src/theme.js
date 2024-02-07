import { extendTheme } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import { modalTheme } from "./modelExtendedTheme";
// 2. Add your color mode config
// const config = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// };

// 3. extend the theme
// const theme = extendTheme({ config });
const theme = extendTheme({
  components: { Modal: modalTheme },
});

export default theme;

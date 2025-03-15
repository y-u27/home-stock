"use client";

import { Box, Text } from "@chakra-ui/react";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <Box
      height="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        justifyContent="center"
        textAlign="center"
        fontSize="24px"
        color="green.300"
        fontWeight="bold"
        // textShadow="2px 2px #38A169"
      >
        あれ、あったっけ？
      </Text>
      <SideBar />
    </Box>
  );
};

export default Header;

"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <Box
      bgColor="yellow.200"
      height="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        justifyContent="center"
        textAlign="center"
        fontSize="24px"
        color="green.500"
        fontWeight="bold"
      >
        あれ、あったっけ？
      </Text>
      <SideBar />
    </Box>
  );
};

export default Header;

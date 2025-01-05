import { Box, Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" pt="200px">
        <Box pl="30%">
          <Text fontSize="20px" textAlign="center" textShadow='2px 2px #4FD1C5' m='5'>登録</Text>
          <Input />
        </Box>
        <Spacer />
        <Box pr="30%">
          <Text fontSize="20px" textAlign="center" textShadow='2px 2px #F6AD55' m='5'>検索</Text>
          <Input />
        </Box>
      </Box>
    </>
  );
};

export default MainPage;

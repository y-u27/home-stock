import { Box } from "@chakra-ui/react";
import RegisterField from "./RegisterField";
import SearchField from "./SearchField";

const MainPage = () => {
  return (
    <>
      <Box position="relative">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="250px"
          position="absolute"
          top="250px"
          left="50%"
          transform="translateX(-50%)"
        >
          <RegisterField />
          <SearchField />
        </Box>
      </Box>
    </>
  );
};

export default MainPage;

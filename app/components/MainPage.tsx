import { Box } from "@chakra-ui/react";
import RegisterField from "./RegisterField";
import SearchField from "./SearchField";

const MainPage = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="80vh"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="40px"
        >
          <RegisterField />
          <SearchField />
        </Box>
      </Box>
    </>
  );
};

export default MainPage;

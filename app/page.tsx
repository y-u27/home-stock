import { Box } from "@chakra-ui/react";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Box color="green.500">
        <Box display="flex" justifyContent="center">
          <Slider/>
        </Box>
      </Box>
    </>
  );
}

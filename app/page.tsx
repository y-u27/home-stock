import { Box } from "@chakra-ui/react";
import Login from "./components/Login";

export default function Home() {
  return (
    <>
      <Box backgroundColor="yellow.200" color="green.500">
        <Login />
      </Box>
    </>
  );
}

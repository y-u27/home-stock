import { Box, Flex, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" >
        <Box>説明1</Box>
        <Box>説明2</Box>
        <Box>説明3</Box>
      </Box>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        {/* <Flex direction="column" background="gray.100" padding={12} rounded={6}>
          <Text>ログイン</Text>
        </Flex> */}
      </Flex>
    </>
  );
};

export default Login;

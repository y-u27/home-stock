import { Flex, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" padding={12} rounded={6}>
          <Text>ログイン</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;

import { Card, CardBody, CardHeader, Input, Text } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <>
      <Card width="50%" mx="auto" mt="5%" boxShadow="2xl">
        <CardHeader>ログイン</CardHeader>
        <CardBody>
          <Text>メールアドレス</Text>
          <Input />
          <Text>パスワード</Text>
          <Input />
        </CardBody>
      </Card>
    </>
  );
};

export default Login;

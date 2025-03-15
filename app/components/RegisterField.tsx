//カテゴリタブから入力するもののカテゴリを選択する
//inputに入力したものを矢印キーをクリックして、データベースへ登録する
//登録成功後はtoastにて「登録成功！」のメッセージを表示させる

"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, IconButton, Input, Text } from "@chakra-ui/react";

const RegisterField = () => {
  return (
    <>
      <Card w="280px" h="150px" background="teal.100">
        <CardBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="20px"
            textAlign="center"
            textShadow="2px 2px #4FD1C5"
            mb="10px"
          >
            登録
          </Text>
          <Box position="relative" w="80%">
            <Input background="white" />
            <IconButton
              icon={<ArrowForwardIcon />}
              aria-label="Open menu"
              size="sm"
              position="absolute"
              top="50%"
              right="3%"
              transform="translateY(-50%)"
            />
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterField;

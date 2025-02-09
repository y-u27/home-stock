//カテゴリタブから入力するもののカテゴリを選択する
//inputに入力したものを矢印キーをクリックして、データベースへ登録する
//登録成功後はtoastにて「登録成功！」のメッセージを表示させる

"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, Text } from "@chakra-ui/react";

const RegisterField = () => {
  return (
    <>
      <Box>
        <Text
          fontSize="20px"
          textAlign="center"
          textShadow="2px 2px #4FD1C5"
          position="fixed"
          right="79%"
          bottom="90px"
        >
          登録
        </Text>
        <Box position="relative" w="120%">
          <Input />
          <IconButton
            icon={<ArrowForwardIcon />}
            aria-label="Open menu"
            size="sm"
            position="absolute"
            top="50%"
            right="4px"
            transform="translateY(-50%)"
          />
        </Box>
      </Box>
    </>
  );
};

export default RegisterField;

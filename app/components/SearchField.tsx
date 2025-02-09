//inputに入力したものを虫眼鏡アイコンをクリックしてデータベースに接続する
//データベースから該当のものを探してその下に表示する
//表示項目はカテゴリ・ものの名前・個数

"use client";

import { Search2Icon } from "@chakra-ui/icons";
import { Box, IconButton, Input, Text } from "@chakra-ui/react";

const SearchField = () => {
  return (
    <>
      <Box>
        <Text
          fontSize="20px"
          textAlign="center"
          textShadow="2px 2px #F6AD55"
          position="fixed"
          right="10%"
          bottom="90px"
        >
          検索
        </Text>
        <Box position="relative" w="120%">
          <Input />
          <IconButton
            icon={<Search2Icon />}
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

export default SearchField;

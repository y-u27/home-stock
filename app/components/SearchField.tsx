//inputに入力したものを虫眼鏡アイコンをクリックしてデータベースに接続する
//データベースから該当のものを探してその下に表示する
//表示項目はカテゴリ・ものの名前・個数

"use client";

import { Search2Icon } from "@chakra-ui/icons";
import { Box, Card, CardBody, IconButton, Input, Text } from "@chakra-ui/react";

const SearchField = () => {
  return (
    <>
      <Card w="280px" h="150px" background="orange.200">
        <CardBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Text
              fontSize="20px"
              textAlign="center"
              textShadow="2px 2px #F6AD55"
              mb="10px"
            >
              検索
            </Text>
            <Box position="relative" w="100%">
              <Input background="white" />
              <IconButton
                icon={<Search2Icon />}
                aria-label="Open menu"
                size="sm"
                position="absolute"
                top="50%"
                right="3%"
                transform="translateY(-50%)"
              />
            </Box>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default SearchField;

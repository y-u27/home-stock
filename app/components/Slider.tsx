"use client";

import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

type slidesType = {
  operation1: string;
  operation2: string;
  operation3: string;
};

// motionをChakra UIのBoxでラップ
const MotionHStack = motion(HStack);

// スライドデータ
const slides: slidesType[] = [
  {
    operation1: "〜家の在庫管理アプリ〜",
    operation2: "今家にないものなどを登録して探すことができます",
    operation3: "",
  },
  {
    operation1: "【登録】",
    operation2: "[登録]に登録したいものの名前を入力",
    operation3: "個数も登録することができます",
  },
  {
    operation1: "【検索】",
    operation2: "[検索]にて登録したものを入力",
    operation3: "登録したものを個数と併せて確認できます",
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 次のスライドへ
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // 前のスレイドへ
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Box
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <MotionHStack
          w="500%"
          h="300px"
          bgGradient='linear(to-r, cyan.200, yellow.300)'
          borderRadius="30px"
          alignContent="center"
          justifyContent="center"
          boxShadow="md"
          position="absolute"
          bottom="45%"
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Box>
            <Text color="black" fontSize="xl">
              {slides[currentIndex].operation1}
            </Text>
            <Text color="black" fontSize="xl">
              {slides[currentIndex].operation2}
            </Text>
            <Text color="black" fontSize="xl">
              {slides[currentIndex].operation3}
            </Text>
          </Box>
        </MotionHStack>
        <HStack spacing={4} mt="120%">
          <Button onClick={prevSlide}>前へ</Button>
          <Button onClick={nextSlide}>次へ</Button>
        </HStack>
      </Box>
      <Box position="absolute" bottom="28%">
        <HStack spacing={2}>
          {slides.map((_, index) => (
            <Box
              key={index}
              w={currentIndex === index ? "12px" : "8px"}
              h={currentIndex === index ? "12px" : "8px"}
              bg={currentIndex === index ? "cyan.500" : "gray.300"}
              borderRadius="50%"
              transition="0.3s"
            />
          ))}
        </HStack>
      </Box>
    </>
  );
};

export default Slider;

"use client";

import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

// motionをChakra UIのBoxでラップ
const MotionHStack = motion(HStack);

// スライドデータ
const slides = ["説明1", "説明2", "説明3"];

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
      <Box>
        <MotionHStack
          w="300%"
          h="200px"
          bg="cyan.400"
          border="cyan.700"
          alignContent="center"
          justifyContent="center"
          boxShadow="md"
          position="relative"
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Text color="white" fontSize="xl">
            {slides[currentIndex]}
          </Text>
        </MotionHStack>
      </Box>

      <Box>
        <HStack spacing={4} mt="50%">
          <Button onClick={prevSlide}>前へ</Button>
          <Button onClick={nextSlide}>次へ</Button>
        </HStack>
      </Box>

      <Box>
        <HStack spacing={2} mt={4}>
          {slides.map((_, index) => (
            <Box
              key={index}
              w={currentIndex === index ? "12px" : "8px"}
              h={currentIndex === index ? "12px" : "8px"}
              bg={currentIndex === index ? "teal.500" : "gray.300"}
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

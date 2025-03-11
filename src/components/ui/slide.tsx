"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/style/style.css";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Slider: React.FC = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            position="relative"
            w="100%"
            h="500px" // Fixed height of 500px
            bgImage="url('https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            bgSize="cover"
            backgroundPosition="center"
          >
            {/* Dark Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="black"
              opacity="0.5"
            />

            {/* Centered Content */}
            <Flex
              position="relative"
              direction="column"
              align="center"
              justify="center"
              h="100%"
              color="white"
              px={4}
            >
              <Heading
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                fontWeight="bold"
                textAlign="center"
                mb="30px"
              >
                10 Most Awesome Breathtaking Places
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "base", md: "lg" }}
                mt={2}
                textAlign="center"
              >
                October 18, 2018 - Paul Newman
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            position="relative"
            w="100%"
            h="500px" // Fixed height of 500px
            bgImage="url('https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            bgSize="cover"
            backgroundPosition="center"
          >
            {/* Dark Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="black"
              opacity="0.5"
            />

            {/* Centered Content */}
            <Flex
              position="relative"
              direction="column"
              align="center"
              justify="center"
              h="100%"
              color="white"
              px={4}
            >
              <Heading
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                fontWeight="bold"
                textAlign="center"
                mb="30px"
              >
                How Nature Will Cure Your Depression
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "base", md: "lg" }}
                mt={2}
                textAlign="center"
              >
                October 18, 2018 - Paul Newman
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box
            position="relative"
            w="100%"
            h="500px" // Fixed height of 500px
            bgImage="url('https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            bgSize="cover"
            backgroundPosition="center"
          >
            {/* Dark Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="black"
              opacity="0.5"
            />

            {/* Centered Content */}
            <Flex
              position="relative"
              direction="column"
              align="center"
              justify="center"
              h="100%"
              color="white"
              px={4}
            >
              <Heading
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                fontWeight="bold"
                textAlign="center"
                mb="30px"
              >
                Top Amazing Places to Go in Summer
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "base", md: "lg" }}
                mt={2}
                textAlign="center"
              >
                October 18, 2018 - Paul Newman
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

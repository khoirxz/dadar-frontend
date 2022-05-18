import React from "react";
import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";

import { Content, Footer, Navbar } from "../../../components";
import { Link } from "react-router-dom";

const Galery = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Box bgColor="#FFF" height="200px">
          <Box p={4}>
            <Flex position="relative">
              <Box position="absolute" top="0" right="0">
                <Link to="/setting">
                  <AiOutlineSetting size={24} />
                </Link>
              </Box>
              <Box position="relative">
                <Avatar
                  name="Rizqi Khoir"
                  src="https://bit.ly/tioluwani-kolawole"
                  size="xl"
                />
              </Box>
              <Box ml="2rem">
                <Text as="h1" fontSize="2xl" fontWeight="bold" mt="1" mb="3">
                  Rizqi Khoirurrohman
                </Text>
                <Text as="p">Seorang yang sangat mencintai masakan 🥰</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box my="5rem">
          <Center>
            <Text fontSize="3xl" fontWeight="bold">
              Galeri saya
            </Text>
          </Center>
        </Box>
      </Content>
      <Footer />
    </>
  );
};

export default Galery;

import React from "react";
import { Avatar, Box, Center, Flex, Text, Spinner } from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { Card, Btn } from "../../../molecules";
import { useSelector } from "react-redux";

import { Content, Footer, Navbar } from "../../../components";
import { Link } from "react-router-dom";

const Galery = () => {
  const foods = useSelector((state) => state.foods);

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
          <Center mb="4rem">
            <Text fontSize="3xl" fontWeight="bold">
              Galeri saya
            </Text>
          </Center>

          <Box mb="3rem" display="flex" flexDir="row" justifyContent="flex-end">
            <Btn as={Link} to="/create" title="Buat resepmu!" />
          </Box>

          {!foods.length ? (
            <Flex alignItems="center" justifyContent="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="red.200"
                color="red.500"
                size="xl"
              />
            </Flex>
          ) : (
            <Box
              display="grid"
              width="100%"
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap="10px"
            >
              {foods.map((items) => (
                <Card key={items._id} data={items} />
              ))}
            </Box>
          )}
        </Box>
      </Content>
      <Footer />
    </>
  );
};

export default Galery;

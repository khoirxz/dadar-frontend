import React from "react";
import { Box, Img, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Content, Navbar } from "../../components";

import imgPost from "../../assets/images/post1.jpg";

const recipes = ["Kemangi", "Bawang merah dan putih", "Soto"];

const Steps = ["Goreng Kemangi", "Tumis Bawang merah dan putih", "Makan Soto"];

const Recipe = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Box width="79%" margin="auto" bgColor="#ffffff" p={3}>
          <Box>
            <Img src={imgPost} w="full" height="auto" />
          </Box>

          <Box m={5}>
            <Box className="content-header" my={7}>
              <Text fontSize="4xl" fontWeight="bold" as="h1">
                Soto Lamongan
              </Text>
              <Text fontSize="xl" as="p">
                Soto Lamongan enak
              </Text>
            </Box>

            <Box className="recipes" my={3}>
              <Text>Bahan-Bahan</Text>
              <UnorderedList>
                {recipes.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Box>

            <Box className="steps-container" my={3}>
              <Text>Langkah-langkah</Text>
              <UnorderedList>
                {Steps.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Content>
    </>
  );
};

export default Recipe;

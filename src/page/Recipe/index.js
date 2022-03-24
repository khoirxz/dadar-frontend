import React from "react";
import { Box, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { Content, Navbar } from "../../components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import imgPost from "../../assets/images/post1.jpg";

const Recipe = () => {
  const { id } = useParams();

  const post = useSelector((state) =>
    id ? state.foods.find((p) => p._id === id) : null
  );

  return (
    <>
      <Navbar />
      <Content>
        {!post?.length ? (
          <Box width="79%" margin="auto" bgColor="#ffffff" p={3}>
            <Box>
              <Image
                fallbackSrc={imgPost}
                src={post?.selectedFile}
                w="full"
                height="auto"
              />
            </Box>

            <Box m={5}>
              <Box className="content-header" my={7}>
                <Text fontSize="44px" fontWeight="bold" as="h1">
                  {post?.title}
                </Text>
                <Text fontSize="28px" as="p">
                  {post?.description}
                </Text>
              </Box>
              <Box className="content-body" my={7}>
                <Text fontSize="32px" fontWeight="bold" as="h1">
                  Bahan-Bahan :
                </Text>
                <List>
                  {post?.ingredients.map((item, i) => (
                    <ListItem
                      fontSize="23px"
                      key={i}
                      borderBottom="dotted 1px #000"
                    >
                      {item.value}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box className="content-body-step" my={7}>
                <Text fontSize="32px" fontWeight="bold" as="h1">
                  Langkah pembuatan :
                </Text>
                <List>
                  {post?.steps.map((item, i) => (
                    <ListItem
                      fontSize="23px"
                      key={i}
                      borderBottom="dotted 1px #000"
                    >
                      {item.value}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box width="79%" margin="auto" bgColor="#ffffff" p={3}>
            <Spinner />
          </Box>
        )}
      </Content>
    </>
  );
};

export default Recipe;

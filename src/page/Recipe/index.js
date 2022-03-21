import React from "react";
import { Box, Img, Spinner, Text } from "@chakra-ui/react";
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
              <Img src={imgPost} w="full" height="auto" />
            </Box>

            <Box m={5}>
              <Box className="content-header" my={7}>
                <Text fontSize="4xl" fontWeight="bold" as="h1">
                  {post?.title}
                </Text>
                <Text fontSize="xl" as="p">
                  {post?.description}
                </Text>
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

import React from "react";
import {
  Box,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
import { Content, Navbar } from "../../components";
import { useSelector } from "react-redux";
import { useParams, Link as LinkDom } from "react-router-dom";

import imgPost from "../../assets/images/post1.jpg";

const Recipe = () => {
  const { slug } = useParams();

  const post = useSelector((state) =>
    slug ? state.foods.find((p) => p.link === slug) : null
  );

  return !post ? (
    <Content>
      <Center mt="2.4rem">
        <Text fontSize="3xl" fontWeight="bold">
          Halaman tidak ditemukan 😢
        </Text>
      </Center>
      <Center>
        <Link as={LinkDom} to="/">
          Kembali keberanda
        </Link>
      </Center>
    </Content>
  ) : (
    <>
      <Navbar />
      <Content>
        {!post?.length ? (
          <Box width="79%" margin="auto" bgColor="#ffffff" p={3}>
            <Box>
              <Image
                className="img-thumb"
                fallbackSrc={imgPost}
                src={post?.selectedFile}
                w="full"
                maxH="400px"
                objectFit="cover"
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

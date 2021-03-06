import { useState } from "react";
import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteFood, likePost } from "../../actions/foods";

import placeholder from "../../assets/images/foodplaceholder.jpg";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(data.likeCount);

  return (
    <Flex
      as="div"
      className="Card"
      bgColor="#fff"
      borderRadius="3px"
      flexDir="column"
      shadow="md"
      justifyContent="space-between"
    >
      <Box
        width="full"
        height="250px"
        className="img-thumb-card"
        as={Link}
        to={`/recipe/${data.link}`}
      >
        <Image
          width="full"
          height="full"
          objectFit="cover"
          src={data.selectedFile}
          fallbackSrc={placeholder}
        />
      </Box>

      <Box className="content-card" p={4}>
        <Link to={`/recipe/${data.link}`}>
          <Box mb={2}>
            <Text
              fontSize="18px"
              fontWeight="bold"
              as="h1"
              cursor="pointer"
              _hover={{
                color: "#FF7979",
              }}
            >
              {data.title}
            </Text>
          </Box>
        </Link>
        <Box>
          <Text fontSize="14px" as="p">
            {data.description}
          </Text>
        </Box>
        <Flex flexDir={{ base: "column", md: "row" }} mt={3}>
          <Badge
            mr={1}
            fontSize={12}
            cursor="pointer"
            colorScheme="pink"
            onClick={() => {
              dispatch(likePost(data._id));
              setLike(like + 1);
            }}
          >
            ❤️ {like} like
          </Badge>
          <Badge
            mr={1}
            fontSize={12}
            cursor="pointer"
            colorScheme="yellow"
            onClick={() => {
              dispatch(deleteFood(data._id));
            }}
          >
            👎 delete
          </Badge>
          <Badge
            as={Link}
            fontSize={12}
            cursor="pointer"
            colorScheme="orange"
            to={`/edit/${data._id}`}
          >
            ✏️ edit
          </Badge>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Card;

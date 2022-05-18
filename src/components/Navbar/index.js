import { Box, Button, Flex, Text, WrapItem, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const menu = ["Home", "About Us"];

function Navbar() {
  return (
    <Box as="nav" bgColor="#FFE9E9" fontFamily="Poppins">
      <Flex
        maxW="1450"
        w="78%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        py={3}
        sx={{
          backgroundColor: "rgba(255, 255, 255, .15)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Text as="h1" fontSize={23} fontWeight="bold">
          <Link to="/">Dadar</Link>
        </Text>
        <Flex
          as="ul"
          alignItems="center"
          sx={{
            listStyle: "none",
          }}
        >
          {menu.map((item, i) => (
            <Text as="li" key={i} px={3} fontSize={14}>
              {item}
            </Text>
          ))}

          <WrapItem>
            <Avatar
              as={Link}
              size="md"
              name="Rizqi K"
              src="https://bit.ly/tioluwani-kolawole"
              to="/account"
            />
          </WrapItem>

          <Box as="li" pl="4">
            <Button
              as={Link}
              bgColor="#FF5B5B"
              color="white"
              _hover={{
                bgColor: "#FF7979",
              }}
              _active={{
                bgColor: "#DF4040",
              }}
              _focus={{
                outline: "none",
              }}
              to="/login"
            >
              Login
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;

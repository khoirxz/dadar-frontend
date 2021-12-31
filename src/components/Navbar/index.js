import { Box, Button, Flex, Text } from "@chakra-ui/react";

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
      >
        <Text as="h1" fontSize={23} fontWeight="bold">
          Dadar
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

          <Box as="li" pl="4">
            <Button
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
            >
              Daftar
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;

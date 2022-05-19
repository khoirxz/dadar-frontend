import { Box, Button, Input } from "@chakra-ui/react";

const Search = () => {
  return (
    <Box
      display="flex"
      maxW="400px"
      width="full"
      margin="auto"
      bgColor="white"
      p="1.5"
      borderRadius="10px"
    >
      <Input variant="unstyled" px={2} placeholder="Cari resep disini" />
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
        Cari
      </Button>
    </Box>
  );
};

export default Search;

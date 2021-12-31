import { Box, Text } from "@chakra-ui/react";

const Hero = ({ children }) => {
  return (
    <Box
      as="div"
      className="Hero"
      maxW="1450"
      w="78%"
      margin="auto"
      textAlign="center"
      display="flex"
      flexDir="column"
    >
      <Box fontFamily="Playfair Display" py="20">
        <Text as="h1" fontSize="7xl" fontWeight="bold">
          Dadar
        </Text>
        <Text as="p" fontSize="xl">
          cari semua resep masakan di Data Dapur
        </Text>
      </Box>
      {children}
    </Box>
  );
};

export default Hero;

import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      className="Footer"
      maxW="1450"
      w="78%"
      margin="auto"
      fontFamily="Poppins"
      py="6"
    >
      <Text as="p">Copyright &copy; Dadar</Text>
    </Box>
  );
};

export default Footer;

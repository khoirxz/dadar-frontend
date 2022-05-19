import { Box } from "@chakra-ui/react";

const Content = ({ children }) => {
  return (
    <Box
      maxW="1450px"
      w={{ base: "97%", lg: "68%" }}
      margin="auto"
      className="Content"
      py="8em"
      fontFamily="Poppins"
    >
      {children}
    </Box>
  );
};

export default Content;

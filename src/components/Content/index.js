import { Box } from "@chakra-ui/react";

const Content = ({ children }) => {
  return (
    <Box
      maxW="1450"
      w="68%"
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

import { Button } from "@chakra-ui/react";

const Btn = ({ title, ...rest }) => {
  return (
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
      {...rest}
    >
      {title}
    </Button>
  );
};

export default Btn;

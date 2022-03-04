import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { Content } from "../../components";
import { Btn } from "../../molecules";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Content>
      <Box
        as="form"
        maxW={["400px", "400px", "400px"]}
        margin="auto"
        p={5}
        borderRadius="lg"
        display="flex"
        flexDir="column"
        alignItems="center"
        w="full"
        bgColor="white"
      >
        <Box mb="1rem">
          <Text as="h1" fontSize="3xl" fontWeight="extrabold">
            Masuk dan mulai{" "}
            <Text as="span" color="red.300">
              Memasak
            </Text>
          </Text>
        </Box>
        <Input
          placeholder="email"
          my={3}
          borderWidth="thin"
          borderColor="blackAlpha.600"
          type="email"
          _hover={{
            borderColor: "red.300",
          }}
        />
        <Input
          placeholder="password"
          borderWidth="thin"
          borderColor="blackAlpha.600"
          type="password"
          _hover={{
            borderColor: "red.300",
          }}
        />
        <Box mt="2rem" mb="1rem" w="full">
          <Btn width="100%" title="Login" />
        </Box>
        <Text as="p">
          belum punya akun ?{" "}
          <Text
            as={Link}
            color="red.300"
            fontWeight="bold"
            cursor="pointer"
            to="/signup"
          >
            Daftar
          </Text>{" "}
        </Text>
      </Box>
    </Content>
  );
};

export default Login;

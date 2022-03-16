import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { Content } from "../../components";
import { Btn } from "../../molecules";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Content>
      <Box
        as="form"
        maxW={["600px", "600px", "600px"]}
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
            Daftar dan bagikan{" "}
            <Text as="span" color="red.300">
              masakan
            </Text>{" "}
            andalanmu
          </Text>
        </Box>
        <Input
          placeholder="Nama"
          my={2}
          borderWidth="thin"
          borderColor="blackAlpha.600"
          type="text"
          _hover={{
            borderColor: "red.300",
          }}
          autoComplete="off"
        />
        <Input
          placeholder="email"
          my={2}
          borderWidth="thin"
          borderColor="blackAlpha.600"
          type="email"
          _hover={{
            borderColor: "red.300",
          }}
          autoComplete="email"
        />
        <Input
          placeholder="password"
          my={2}
          borderWidth="thin"
          borderColor="blackAlpha.600"
          type="password"
          _hover={{
            borderColor: "red.300",
          }}
          autoComplete="new-password"
        />
        <Input
          placeholder="Konfirmasi Password"
          my={2}
          borderWidth="thin"
          borderColor="blackAlpha.600"
          type="password"
          _hover={{
            borderColor: "red.300",
          }}
          autoComplete="confirm-password"
        />
        <Box mt="2rem" mb="1rem" w="full">
          <Btn width="100%" title="Daftar" />
        </Box>
        <Text as="p">
          sudah mendaftar ?{" "}
          <Text
            as={Link}
            color="red.300"
            fontWeight="bold"
            cursor="pointer"
            to="/login"
          >
            Login
          </Text>{" "}
        </Text>
      </Box>
    </Content>
  );
};

export default Signup;

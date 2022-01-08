import {
  chakra,
  Box,
  FormControl,
  FormLabel,
  Flex,
  Stack,
  Icon,
  VisuallyHidden,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Content, Navbar } from "../../components";
import { Btn } from "../../molecules";

const Post = () => {
  return (
    <Box display="flex" flexDir="column">
      <Navbar />

      <Content>
        <Box
          bgColor="#ffffff"
          w="75%"
          padding={4}
          margin="auto"
          borderTopRadius={5}
        >
          <chakra.form>
            <FormControl>
              <Flex
                mt={1}
                justify="center"
                px={6}
                pt={5}
                pb={6}
                borderWidth={2}
                borderStyle="dashed"
                rounded="md"
              >
                <Stack spacing={1} textAlign="center">
                  <Icon
                    mx="auto"
                    boxSize={12}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                  <Flex fontSize="sm" alignItems="baseline">
                    <chakra.label
                      htmlFor="file-upload"
                      cursor="pointer"
                      rounded="md"
                      fontSize="md"
                      pos="relative"
                      _hover={{
                        color: "#FF5B5B",
                      }}
                    >
                      <span>Upload gambar masakanmu </span>
                      <VisuallyHidden>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                        />
                      </VisuallyHidden>
                    </chakra.label>
                  </Flex>
                  <Text fontSize="xs">PNG, JPG, GIF up to 10MB</Text>
                </Stack>
              </Flex>
            </FormControl>

            <FormControl my={4}>
              <FormLabel htmlFor="title" fontSize="sm" fontWeight="md">
                Nama masakanmu :
              </FormLabel>
              <Input
                type="text"
                name="title"
                id="title"
                autoComplete="title"
                mt={1}
                focusBorderColor="green.100"
                shadow="sm"
                size="lg"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl id="email" mt={1}>
              <FormLabel fontSize="sm" fontWeight="md">
                Deskripsikan Maskanmu :
              </FormLabel>
              <Textarea
                placeholder="2 bawang
                1 cabai"
                mt={1}
                rows={3}
                shadow="sm"
                focusBorderColor="green.100"
                fontSize={{ sm: "sm" }}
              />
            </FormControl>

            <Box px={{ base: 4, sm: 6 }} py={3} textAlign="right">
              <Btn title="Publis" />
            </Box>
          </chakra.form>
        </Box>
      </Content>
    </Box>
  );
};

export default Post;

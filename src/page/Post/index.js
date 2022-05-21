import { useState, useEffect } from "react";
import {
  chakra,
  Box,
  FormControl,
  FormLabel,
  Flex,
  Icon,
  Input,
  Textarea,
  Center,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link as LinkDom } from "react-router-dom";

import { createPost, updateFood } from "../../actions/foods";
import { Content, Navbar } from "../../components";
import { Btn } from "../../molecules";
import IngsComponent from "./IngsComponent";
import StepsComponent from "./StepsComponent";

import success from "../../assets/images/done.png";
import "./style.css";

const Post = () => {
  const { id, create } = useParams();

  const [filled, setFilled] = useState(false);
  const [data, setData] = useState({
    title: "",
    slug: "",
    description: "",
    selectedFile: "",
    ingredients: [],
    steps: [],
  });

  const dispatch = useDispatch();
  const post = useSelector((state) =>
    id ? state.foods.find((p) => p._id === id) : null
  );

  useEffect(() => {
    if (id) {
      setData({
        title: post?.title,
        description: post?.description,
        selectedFile: post?.selectedFile,
        ingredients: post?.ingredients,
        steps: post?.steps,
      });
    }
  }, [post, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.title || data.description || data.steps || data.ingredients) {
      setFilled(true);
      if (id) {
        // update
        dispatch(updateFood(id, data));
      } else {
        dispatch(createPost(data));
      }
    }

    console.log(data);
  };
  //! code is work from here
  // console.log(data);

  return (id && post) || create ? (
    !filled ? (
      <Box display="flex" flexDir="column">
        <Navbar />

        <Center mt="2.4rem">
          <Text fontSize="3xl" fontWeight="bold">
            {id ? "Edit masakan ✏️" : "Buat resepmu 📝"}
          </Text>
        </Center>

        <Content>
          <Box
            bgColor="#ffffff"
            w={{ base: "97%", md: "80%", lg: "75%" }}
            padding={4}
            margin="auto"
            borderTopRadius={5}
          >
            <chakra.form onSubmit={handleSubmit}>
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
                  flexDir="column"
                >
                  <Box>
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
                  </Box>
                  <Box className="input-file">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setData({ ...data, selectedFile: base64 })
                      }
                    />
                  </Box>
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
                  value={data.title || ""}
                  onChange={(e) => {
                    setData({
                      ...data,
                      title: e.target.value,
                      slug: e.target.value
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, ""),
                    });
                  }}
                />
              </FormControl>

              <FormControl my={4}>
                <FormLabel fontSize="sm" fontWeight="md">
                  Deskripsikan Masakanmu :
                </FormLabel>
                <Textarea
                  mt={1}
                  rows={3}
                  shadow="sm"
                  placeholder="Masakan favorit keluarga..."
                  focusBorderColor="green.100"
                  fontSize={{ sm: "sm" }}
                  value={data.description || ""}
                  onChange={(e) => {
                    setData({ ...data, description: e.target.value });
                  }}
                />
              </FormControl>

              <IngsComponent data={data} setData={setData} id={id} />
              <StepsComponent data={data} setData={setData} id={id} />

              <Box px={{ base: 4, sm: 6 }} py={3} textAlign="right">
                <Btn type="submit" title="Publis" />
              </Box>
            </chakra.form>
          </Box>
        </Content>
      </Box>
    ) : (
      <Content>
        <Image
          src={success}
          alt="Done publish"
          display="block"
          mr="auto"
          ml="auto"
        />
        <Center mt="2.4rem">
          <Text fontSize="3xl" fontWeight="bold">
            Wahh kelihatanya enak 😍
          </Text>
        </Center>
        <Center>
          <Link as={LinkDom} to="/">
            beranda
          </Link>
        </Center>
      </Content>
    )
  ) : (
    <Content>
      <Center mt="2.4rem">
        <Text fontSize="3xl" fontWeight="bold">
          Halaman tidak ditemukan 😢
        </Text>
      </Center>
      <Center>
        <Link as={LinkDom} to="/">
          Kembali keberanda
        </Link>
      </Center>
    </Content>
  );
};

export default Post;

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
} from "@chakra-ui/react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { createPost, updateFood } from "../../actions/foods";
import { Content, Navbar } from "../../components";
import { Btn } from "../../molecules";
import IngsComponent from "./IngsComponent";
import StepsComponent from "./StepsComponent";

const Post = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    title: "",
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

    if (id) {
      // update
      dispatch(updateFood(id, data));
    } else {
      dispatch(createPost(data));
    }
    console.log(data);
  };
  //! code is work from here
  // console.log(data);

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
                <Box width="50px">
                  <FileBase
                    id="foodImg"
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
                  setData({ ...data, title: e.target.value });
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
  );
};

export default Post;

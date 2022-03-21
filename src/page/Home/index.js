import { Box, Spinner, Flex } from "@chakra-ui/react";
import { Content, Footer, Hero, Navbar, Search } from "../../components";
import { Btn, Card } from "../../molecules";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const foods = useSelector((state) => state.foods);

  console.log(foods);
  return (
    <Box display="flex" flexDir="column">
      <Navbar />
      <Hero>
        <Search />
      </Hero>

      <Content>
        <Box mb="3rem" display="flex" flexDir="row" justifyContent="flex-end">
          <Btn as={Link} to="/create" title="Buat resepmu!" />
        </Box>

        {!foods.length ? (
          <Flex alignItems="center" justifyContent="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="red.200"
              color="red.500"
              size="xl"
            />
          </Flex>
        ) : (
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="10px">
            {foods.map((items) => (
              <Card
                key={items._id}
                title={items.title}
                desc={items.description}
                id={items._id}
              />
            ))}
          </Box>
        )}
      </Content>
      <Footer />
    </Box>
  );
}

export default Home;

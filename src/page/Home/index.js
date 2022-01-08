import { Box } from "@chakra-ui/react";
import { Content, Footer, Hero, Navbar, Search } from "../../components";
import { Btn, Card } from "../../molecules";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box display="flex" flexDir="column">
      <Navbar />
      <Hero>
        <Search />
      </Hero>

      <Content>
        <Box display="flex" my="5" flexDir="row" justifyContent="flex-end">
          <Btn as={Link} to="/create" title="Buat resepmu!" />
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="10px">
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </Content>
      <Footer />
    </Box>
  );
}

export default Home;

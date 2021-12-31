import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Home from "./page/Home";

function App() {
  return (
    <Box bgColor="#FFE9E9" color="#4F4C4C" minH="100vh">
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </Box>
  );
}

export default App;

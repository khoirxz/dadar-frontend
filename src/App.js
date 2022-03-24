import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { getFoods } from "./actions/foods";
import Home from "./page/Home";
import Post from "./page/Post";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Recipe from "./page/Recipe";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <Box bgColor="#FFE9E9" color="#4F4C4C" minH="100vh">
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Post />} />
          <Route path="/edit/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          {/* account route */}
        </Switch>
      </Router>
    </Box>
  );
}

export default App;

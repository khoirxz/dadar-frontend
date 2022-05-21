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

//! Account Component
import Galery from "./page/User/Galery";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <Box bgColor="#FFE9E9" color="#4F4C4C" minH="100vh">
      <Router>
        <Switch>
          {/* login route & signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* base router */}
          <Route path="/" element={<Home />} />
          <Route path="/:create" element={<Post />} />
          <Route path="/:edit/:id" element={<Post />} />
          <Route path="/recipe/:slug" element={<Recipe />} />
          {/* account route */}
          <Route path="/account" element={<Galery />} />
          {/* 404 */}
          {/* <Route path='*' element={<></>} /> */}
        </Switch>
      </Router>
    </Box>
  );
}

export default App;

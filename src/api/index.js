import axios from "axios";

const url = "http://localhost:5000/api";

export const fetchPosts = () => axios.get(`${url}/foods`);
export const createPost = (newPost) => axios.post(`${url}/foods`, newPost);
export const updatePost = (id, post) => axios.patch(`${url}/food/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/food/${id}`);

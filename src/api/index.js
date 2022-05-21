import axios from "axios";

const url = "https://dadar-project.herokuapp.com/api";

export const fetchPosts = () => axios.get(`${url}/foods`);
export const createPost = (newPost) => axios.post(`${url}/foods`, newPost);
export const updatePost = (id, post) => axios.patch(`${url}/food/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/food/${id}`);
export const likePost = (id, post) => axios.patch(`${url}/${id}/likePost`);

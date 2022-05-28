import axios from "axios";

export const loadUserApi = async (start, end) =>
await axios.get(`http://localhost:5000/users?_start=${start}&_end=${end}`)

export const createUserApi = async (user) =>
  await axios.post("http://localhost:5000/users", user);

export const deteleUserApi = async (userId) =>
  await axios.delete(`http://localhost:5000/users/${userId}`);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:5000/users/${userId}`, userInfo);

export const searchUserApi = async (query) =>
  await axios.get(`http://localhost:5000/users?q=${query}`);

export const filterUserApi = async (value) =>
  await axios.get(`http://localhost:5000/users?status=${value}`);

export const sortUserApi = async (value) =>
  await axios.get(`http://localhost:5000/users?_sort=${value}&_order=asc`);

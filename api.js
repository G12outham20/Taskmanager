import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);

export const getTasks = (userId, token) =>
  API.get(`/tasks/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createTask = (task, token) =>
  API.post("/tasks", task, {
    headers: { Authorization: `Bearer ${token}` },
  });
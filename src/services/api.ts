import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-18-219-192-252.us-east-2.compute.amazonaws.com:8080/api",
});

export default api;

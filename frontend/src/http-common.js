import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/v1/universities",
  headers: {
    "Content-type": "application/json",
  },
});

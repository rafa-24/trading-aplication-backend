import axios from "axios";

export const greetUser = async (config) => {
  try {
    const url = "http://localhost:3000/auth";
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

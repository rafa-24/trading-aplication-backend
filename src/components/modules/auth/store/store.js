import axios from "axios";

export const registerUser = async (dataUser) => {
  try {
    const url = "http://localhost:3000/auth/register";
    const response = await axios.post(url, dataUser);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const signIn = async(user) => {
  try {
    const url = "http://localhost:3000/auth/login";
    const response = await axios.post(url, user);
    return response.data;        
  } catch (error) {
    return error;        
  }
  
}


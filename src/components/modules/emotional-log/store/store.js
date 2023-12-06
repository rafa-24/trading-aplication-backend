import axios from "axios";

export const createEmotionalLog = async (config, data) => {
  try {
    const url = "http://localhost:3000/feeling-log";
    const resp = await axios.post(url, data, config);
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const getAllEmotionalLog = async (config) => {
  try {
    const url = "http://localhost:3000/feeling-log";
    const resp = await axios.get(url, config);
    return resp.data;
  } catch (error) {
    return error;
  }
};

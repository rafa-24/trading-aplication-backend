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

export const deleteEmotionalLog = async (config, id) => {
  try {
    const url = `http://localhost:3000/feeling-log/${id}`;
    const resp = await axios.delete(url, config);
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const updateEmotionalLog = async (config, id, data) => {
  try {
    const url = `http://localhost:3000/feeling-log/${id}`;
    const resp = await axios.patch(url, data, config);
    return resp.data;
  } catch (error) {
    return error;
  }
};

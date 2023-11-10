import axios from "axios";

const login = (url, data) => {
  axios.post(url,data)
  .then(response =>response)
  .catch(error => error)
}

export const apiService = {
  login
}


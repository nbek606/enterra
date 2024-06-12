import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://poker.evenbetpoker.com/api/web",
});

export default axiosInstance;
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;

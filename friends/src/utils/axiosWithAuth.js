import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseUrl: "http://localhost:5000",
  });
};

export default axiosWithAuth;

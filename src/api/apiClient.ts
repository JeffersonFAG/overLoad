import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // API pública (ejemplo)
});

// Interceptor para añadir token fake a las requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("fakeToken"); // O sessionStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;

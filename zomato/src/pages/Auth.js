import axios from "axios";

const API_URL = "http://localhost:5500";

export const register = async (email, password) => {
  try {
    await axios.post(`${API_URL}/register`, { email, password });
  } catch (err) {
    console.error(
      "Error during registration:",
      err.response ? err.response.data : err.message
    );
    throw new Error("Registration failed");
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.getItem("token", token);
    return token;
  } catch (err) {
    console.error(
      "Error during login:",
      err.respose ? err.response.data : err.message
    );
    throw new Error("Login failed");
  }
};

export const getToken = () => {
  localStorage.getItem("token");
};

export const isLoggedIn = () => {
  const token = getToken();
  return token != null;
};

export const logOut = () => {
  localStorage.removeItem("token");
};

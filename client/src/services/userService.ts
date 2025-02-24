import axios from "axios";

const API_BASE_URL = "https://localhost:8080/api";

interface newUserData {
  firstName: string | null;
  lastName: string | null;
  email: string;
  password: string;
  confirmPassword: string;
}

interface loginData {
  email: string;
  password: string;
}

const signupUser = async (userData: newUserData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);

    return response.data;
  } catch (error: any) {
    throw new Error("Error registering new user: ", error);
  }
};

const loginUser = async (loginData: loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);

    return response.data;
  } catch (error: any) {
    throw new Error("Error logging in: ", error);
  }
};

export { signupUser, loginUser };
import axios from "axios";
import { API_ENDPOINTS } from "../constants/authConstants";

export const checkUserExists = async (email: string) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.USERS}?email=${email}`);
    return response.data.length > 0;
  } catch (error) {
    console.error("User existence:", error);
    return false;
  }
};

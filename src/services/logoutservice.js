// src/services/Logout.js
import axios from "axios";

const Logout = async () => {
  try {
    await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/logout`,
      {}, // <- this is the body (empty)
      { withCredentials: true } // <- this goes into config
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { Logout };

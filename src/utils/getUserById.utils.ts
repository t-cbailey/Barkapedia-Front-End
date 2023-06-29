import server from "../Api/api";
import { User } from "../types/CustomTypes";

const getUserById = (user_id: string): Promise<User> => {
  return server
    .get(`users/${user_id}`)
    .then((userData) => {
      return userData.data;
    })
    .catch((err) => err);
};

export default getUserById;

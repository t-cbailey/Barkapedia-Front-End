import server from "../Api/api";
import { UserRequest } from "../types/CustomTypes";

export default function postUser(user: UserRequest) {
  return server.post("/users", user).then((result) => {});
}

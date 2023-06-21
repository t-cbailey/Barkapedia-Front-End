import server from "../Api/api";
import UserRequest from "../types/CustomTypes";

export default function postUser(user: any) {
  return server.post("/users", user).then((result) => {
    console.log(result)
  });
}

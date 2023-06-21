import server from "../Api/api";

function getUserById(user_id: string | undefined) {
  return server
    .get(`users/${user_id}`)
    .then((result) => {
      return result;
    })
    .catch((err) => err);
}

export default getUserById;

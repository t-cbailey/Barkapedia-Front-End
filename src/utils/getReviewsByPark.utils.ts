import server from "../Api/api";

export default function getReviews(park_id: string | undefined) {
  return server
    .get(`reviews/${park_id}`)
    .then((result) => {
      return result;
    })
    .catch((err) => err);
}
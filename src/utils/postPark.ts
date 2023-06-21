import server from "../Api/api";
import { ParkSubmissionObject } from "../types/CustomTypes";

export default function postPark(park: ParkSubmissionObject) {
  return server.post("/parks", park).then((res) => {
    return res;
  });
}

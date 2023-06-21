import server from "../Api/api";

export interface ReviewData {
    park_id: string;
    rating: number;
    safety: number;
    AsDescribed: string;
    title: string;
    body: string;
  }

  export function postReview(reviewData: ReviewData) {
    return server
      .post("/reviews", reviewData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error posting review:", error);
        throw error;
      });
  }

export default postReview;

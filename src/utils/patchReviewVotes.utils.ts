import server from "../Api/api";
import { PatchReviewResponse, Review, ReviewVoteRequest } from "../types/CustomTypes";

const patchReviewVotes = (reviewRequest: ReviewVoteRequest): Promise<PatchReviewResponse> => {
  const { review_id, increment } = reviewRequest;
  return server.patch(`/reviews/${review_id}/votes`, { increment });
};

export default patchReviewVotes;

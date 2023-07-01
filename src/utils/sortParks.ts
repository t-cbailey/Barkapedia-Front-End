import { Park } from "../types/CustomTypes";

export const sortParks = (
  parks: Park[],
  sortBy: number[] | string[] | undefined
) => {
  if (parks && sortBy) {
    return parks.sort((a, b) => {
      let x = a[sortBy[1] as keyof Object];
      let y = b[sortBy[1] as keyof Object];

      if (sortBy[0] === "desc") {
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      }
      if (sortBy[0] === "asc" || "") {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      } else return 0;
    });
  }

  return parks;
};

import { User } from "../components/data";

type DataKey = keyof User;
enum Direction {
  ASC = "asc", // rosnąco
  DESC = "desc", // malejąco
}

// generic
// export const useSortData<T> = (
//   data: T,

export const useSortData = (
  data: User[],
  field: DataKey,
  direction?: Direction
) => {
  // first hook from react (useState, useEffect, useReducer)

  return data.sort((a, b) => {
    const nameA = a[field]; // TODO: toLowerCase when string
    const nameB = b[field];
    if (nameA < nameB) {
      return -1; // TODO:
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};

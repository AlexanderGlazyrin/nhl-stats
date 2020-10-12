import {ADD} from "../action-types";

export const playersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...action.payload]
    default:
      return state
  }
}

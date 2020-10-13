import {ADD, REMOVE_LIST_TEAM} from "../action-types";

export const playersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...action.payload]
    case REMOVE_LIST_TEAM:
      return []
    default:
      return state
  }
}

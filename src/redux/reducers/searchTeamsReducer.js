import {SEARCH_TEAM} from "../action-types";

export const searchTeamsReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_TEAM:
      return [...state, ...action.payload]
    default:
      return state
  }
}

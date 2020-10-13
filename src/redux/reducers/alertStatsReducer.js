import {HAVE_STATS, NO_STATS} from "../action-types";

const initialState = {
  noStats: false
}

export const alertStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NO_STATS:
      return {...state, noStats: true}
    case HAVE_STATS:
      return {...state, noStats: false}
    default:
      return state
  }
}

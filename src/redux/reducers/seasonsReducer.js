import {GET_SEASONS} from "../action-types";

export const seasonsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SEASONS:
      const currentYear = new Date().getFullYear()
      const seasons = []
      for (let year = +action.payload + 1; year <= currentYear; year += 1) {
        seasons.push(`${year}/${year + 1}`)
      }
      return seasons.reverse();
    default:
      return state
  }
}

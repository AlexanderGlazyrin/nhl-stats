import {combineReducers} from "redux";
import {playersReducer} from "./playersReducer";
import {searchTeamsReducer} from "./searchTeamsReducer";
import {seasonsReducer} from "./seasonsReducer";

export const rootReducers = combineReducers({players: playersReducer, searchTeams: searchTeamsReducer, seasons: seasonsReducer})

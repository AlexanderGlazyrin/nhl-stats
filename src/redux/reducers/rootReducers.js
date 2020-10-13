import {combineReducers} from "redux";
import {playersReducer} from "./playersReducer";
import {searchTeamsReducer} from "./searchTeamsReducer";
import {seasonsReducer} from "./seasonsReducer";
import {loaderReducer} from "./loaderReducer";

export const rootReducers = combineReducers({players: playersReducer, searchTeams: searchTeamsReducer, seasons: seasonsReducer, loader: loaderReducer})

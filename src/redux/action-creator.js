import {ADD, GET_SEASONS, SEARCH_TEAM} from "./action-types";

export const addPlayersStats = (some) => {
  return {
    type: ADD,
    payload: some
  }
}

export const addPlayersStatsFetch = (team, season) => {
  const nextSeason = season + 1;
  return async (dispatch) => {
    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${team}/roster?expand=team.roster&season=${season}${nextSeason}`)
    const data = (await res.json()).roster;
    const allRosterInfo = data.map(async (player) => {
      const resStats = await (await fetch(`https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=${season}${nextSeason}`)).json()
      const resPlayer = await (await fetch(`https://statsapi.web.nhl.com/api/v1/people/${player.person.id}`)).json()

      return {
        playerInfo: resPlayer.people[0],
        stats: resStats.stats[0].splits && resStats.stats[0].splits[0]
      }
    })

    Promise.all(allRosterInfo).then(res => dispatch(addPlayersStats(res)))
  }
}

export const searchTeams = () => {
  return async (dispatch) => {
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams')
    const data = (await res.json()).teams
    return dispatch({
      type: SEARCH_TEAM,
      payload: data
    })
  }
}

export const getSeasons = (payload) => {
  return {
    type: GET_SEASONS,
    payload
  }
}

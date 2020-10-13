import {
  ADD,
  GET_SEASONS,
  HAVE_STATS,
  HIDE_LOADER,
  NO_STATS,
  REMOVE_LIST_TEAM,
  SEARCH_TEAM,
  SHOW_LOADER
} from "./action-types";

export const addPlayersStats = (some) => {
  return {
    type: ADD,
    payload: some
  }
}

export const addPlayersStatsFetch = (team, season) => {
  const nextSeason = season + 1;
  return async (dispatch) => {
    dispatch(removeListTeam())
    dispatch(hasStats())

    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${team}/roster?expand=team.roster&season=${season}${nextSeason}`)
    if (res.status !== 404) {
      const data = (await res.json()).roster;
      dispatch(showLoader())
      const allRosterInfo = data.map(async (player) => {
        const resStats = await (await fetch(`https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=${season}${nextSeason}`)).json()
        const resPlayer = await (await fetch(`https://statsapi.web.nhl.com/api/v1/people/${player.person.id}`)).json()
        const resPhoto = await fetch(`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}.jpg`)

        if (resPhoto.status !== 200) {
          return {
            playerInfo: resPlayer.people[0],
            stats: resStats.stats[0].splits && resStats.stats[0].splits[0],
            photoLink: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/skater.jpg`
          }
        }
        return {
          playerInfo: resPlayer.people[0],
          stats: resStats.stats[0].splits && resStats.stats[0].splits[0],
          photoLink: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}.jpg`
        }
      })

      Promise.all(allRosterInfo)
        .then(res => dispatch(addPlayersStats(res)))
        .then(() => dispatch(hideLoader()))
    } else {
      dispatch(noStats())
    }
  }
}

export const searchTeams = () => {
  return async (dispatch) => {
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams')
    const data = (await res.json()).teams

    data.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    });

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

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

export const removeListTeam = () => {
  return {
    type: REMOVE_LIST_TEAM
  }
}

export const noStats = () => {
  return {
    type: NO_STATS
  }
}

export const hasStats = () => {
  return {
    type: HAVE_STATS
  }
}

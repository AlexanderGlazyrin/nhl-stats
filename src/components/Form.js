import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPlayersStatsFetch, getSeasons, searchTeams} from "../redux/action-creator";
import OptionTeam from "./OptionTeam";
import OptionSeason from "./OptionSeason";

const Form = () => {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.searchTeams)
  const seasons = useSelector(state => state.seasons)

  useEffect(() => {
    dispatch(searchTeams())
  }, [])

  const selectTeam = (e) => {
    e.preventDefault()
    const { team: { value: team }, season: { value: season }  } = e.target
    if (team) {
      dispatch(addPlayersStatsFetch(team, +season))
    }
  }

  const changeTeam = (e) => {
    const { value } = e.target
    const currentTeam = teams.find(team => team.id === +value);
    dispatch(getSeasons(currentTeam.firstYearOfPlay))
  }

  return (
    <form
      className="mt-5"
      onSubmit={selectTeam}
    >
      <select
        id="inputTeam"
        className="form-control mb-2"
        name="team"
        onChange={changeTeam}
      >
        <option selected disabled value="">Team</option>
        {teams.length && teams.map(team => <OptionTeam key={team.name} team={team}/>)}
      </select>
      {seasons.length ? <select
        id="inputYear"
        className="form-control mb-2"
        name="season"
      >
        {seasons.map(season => <OptionSeason key={season} season={season}/>)}
      </select> : null}
      <button type="submit" className="btn btn-success mb-3">Search</button>
    </form>
  );
};

export default Form;

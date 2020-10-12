import React, {useEffect} from 'react';
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {addSomeFetch} from "../redux/action-creator";

const List = () => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players)

  return (
    <div>
      {players.length ? players.map(player => <Card key={player.playerInfo.id} playerInfo={player.playerInfo} stats={player.stats}/>) : null}
    </div>
  );
};

export default List;

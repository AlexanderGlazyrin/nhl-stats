import React from 'react';
import Card from "./Card";
import {useSelector} from "react-redux";

const List = () => {
  const players = useSelector(state => state.players)

  return (
    <div className="d-flex justify-content-between flex-wrap">
      {players.length ? players.map(player => <Card key={player.playerInfo.id} playerInfo={player.playerInfo} stats={player.stats}/>) : null}
    </div>
  );
};

export default List;

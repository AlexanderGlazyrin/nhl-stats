import React from 'react';
import Card from "./Card";
import {useSelector} from "react-redux";
import Spinner from "./Spinner";

const List = () => {
  const players = useSelector(state => state.players)
  const loader = useSelector(state => state.loader.isLoading)

  return (
    <div className="d-flex justify-content-between flex-wrap">
      {loader && <Spinner/>}
        {players.length ?
          players.map(player => <Card key={player.playerInfo.id} playerInfo={player.playerInfo} stats={player.stats} photo={player.photoLink}/>) : null}
    </div>
  );
};

export default List;

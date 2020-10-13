import React from 'react';

const Card = ({playerInfo, stats, photo}) => {
  return (
      <div className="card text-center" style={{width: "30%", marginBottom: "20px"}}>
        <div className="card-body">
          <h5 className="card-title">{playerInfo.fullName}</h5>
          <img src={photo} alt=""/>
          <p className="card-text">{playerInfo.primaryPosition.code !== 'G' ? `Goals - ${stats ? stats.stat.goals : 0}, Assists - ${stats ? stats.stat.assists : 0}` :
            `GP - ${stats ? stats.stat.games : 0}, Save % - ${stats ? stats.stat.evenStrengthSavePercentage.toFixed(2) : 0}`}</p>
        </div>
      </div>
  );
};

export default Card;

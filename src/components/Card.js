import React from 'react';

const Card = ({playerInfo, stats}) => {
  return (
    <div>
      {playerInfo.fullName}: {playerInfo.primaryPosition.code !== 'G' ? `Голов - ${stats ? stats.stat.goals : 0}, Передач - ${stats ? stats.stat.assists : 0}` :
      `Количество игр - ${stats ? stats.stat.games : 0}, процент отраженных бросков - ${stats ? stats.stat.evenStrengthSavePercentage.toFixed(2) : 0}`}
    </div>
  );
};

export default Card;

import React from 'react';

const OptionTeam = ({team}) => {
  return (
    <option value={team.id}>
      {team.name}
    </option>
  );
};

export default OptionTeam;

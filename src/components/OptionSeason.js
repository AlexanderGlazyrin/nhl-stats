import React from 'react';

const OptionSeason = ({season}) => {
  return (
    <option value={season.slice(0, 4)}>
      {season}
    </option>
  );
};

export default OptionSeason;

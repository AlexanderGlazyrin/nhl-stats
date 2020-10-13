import React from 'react';
import {useSelector} from "react-redux";

const Alert = () => {
  const alert = useSelector(state => state.alert.noStats)
  console.log(alert)
  return (
    (alert ?
    <div className="alert alert-info" role="alert">
      No statistics for the team in the desired season
    </div> :
        <></>
    )
  );
};

export default Alert;

import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center" style={{width: "100%", marginTop: "50px"}}>
      <div className="spinner-border" style={{width: "4rem", height: "4rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

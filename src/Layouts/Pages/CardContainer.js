import React from "react";

const CardContainer = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="mb-2">{props.title}</h3>
      </div>
      <div className="card-body" style={{ paddingTop: "0rem" }}>
        {props.children}
      </div>
    </div>
  );
};

export default CardContainer;

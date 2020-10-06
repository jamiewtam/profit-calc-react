import React from "react";

const CardContainer = (props) => {
  return (
    <div class="card">
      <div class="card-header">
        <h3 class="mb-2">{props.title}</h3>
      </div>
      <div class="card-body" style={{ paddingTop: "0rem" }}>
        {props.children}
      </div>
    </div>
  );
};

export default CardContainer;

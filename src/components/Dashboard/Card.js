import React from "react";

const Card = (props) => {
  const { title, currency, amount, arrowDirection, hoverText } = props;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="card card-dashboard" id="revenue-card">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
          <div className="metric-value d-inline-block">
            <h1 className="mb-1"> {currency} &nbsp; </h1>
            <h1 className="mb-1" id="store-revenue">
              {amount}
            </h1>
          </div>
          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
            <i className={`fa fa-fw fa-arrow-${arrowDirection}`}></i>
          </div>
          <div className="card-hover-text" id="revenue-hover-text">
            {hoverText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

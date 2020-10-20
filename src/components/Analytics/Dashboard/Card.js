import React from "react";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { userContext } from '../../../util/Context/userContext';

const Card = (props) => {
  const { title, amount, arrowDirection, hoverText } = props;
  let { currencySymbol } = React.useContext(userContext)

  if (title === 'Profit Margin %' || title === 'Number of Orders') {
    currencySymbol = ''
  }

  const ArrowIcon = ({ direction }) => {
    if (direction === "up") {
      return (
        <div className="text-success">
          <FaArrowUp />
        </div>
      );
    } else if (direction === "down") {
      return (
        <div className="text-danger">
          <FaArrowDown />
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const gmOrProfitAmountColoring = () => {
    let gmOrProfitColoring = ''
    if ((title === 'Gross Margin' && amount >= 0) || (title === 'Profit' && amount >= 0)) {
      gmOrProfitColoring = 'text-success'
    } else if ((title === 'Gross Margin' && amount < 0) || (title === 'Profit' && amount < 0)) {
      gmOrProfitColoring = 'text-neg-profit'
    }

    return gmOrProfitColoring
  }

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="card card-dashboard" id="revenue-card">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
          <div className="metric-value d-inline-block">
            <h1 className="mb-1"> {currencySymbol}  &nbsp; </h1>
            <h1 className={`mb-1 ${gmOrProfitAmountColoring()}`}>
              {amount}
            </h1>
          </div>
          <div className="metric-label d-inline-block float-right font-weight-bold">
            <ArrowIcon direction={arrowDirection} />
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

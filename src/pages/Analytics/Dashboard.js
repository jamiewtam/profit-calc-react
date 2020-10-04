import React from "react";
import { Row } from "reactstrap";
import Card from "../../components/Dashboard/Card";

const Dashboard = () => {
  const cardArray = [
    {
      title: "Revenue",
      amount: "0.00",
      arrowDirection: "up",
      hoverText: " Informational Card - Already Deducted Under Total Revenue",
    },
    {
      title: "COGS",
      amount: "0.00",
      arrowDirection: "up",
      hoverText: " Informational Card - Already Deducted Under Total Revenue",
    },
    {
      title: "Custom Order Expense",
      amount: "0.00",
      arrowDirection: "up",
      hoverText: " Informational Card - Already Deducted Under Total Revenue",
    },
    {
      title: "Profit",
      amount: "0.00",
      arrowDirection: "up",
      hoverText: " Informational Card - Already Deducted Under Total Revenue",
    },
  ];

  const DashboardCards = () => {
    return cardArray.map((cardElement) => {
      return (
        <Card
          title={cardElement.title}
          amount={cardElement.amount}
          arrowDirection={cardElement.arrowDirection}
          hoverText={cardElement.hoverText}
        />
      );
    });
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-finance">
        <div className="container-fluid dashboard-content">
          {/* <div className="overlay" id="loading">
            <div className="overlay__inner">
              <div className="overlay__content">
                <span className="spinner"></span>
              </div>
            </div>
             </div> */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header"></div>
              <h1 className="mb-2">Dashboard </h1>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
              <form></form>
              <div className="form-group">
                <input
                  className="form-control"
                  id="date-range"
                  type="text"
                  name="daterange"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <DashboardCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

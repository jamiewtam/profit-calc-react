import React from "react";

const GraphBreakdown = (props) => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-finance" id="line-chart-report">
        <div className="container-fluid dashboard-content">
          <div className="overlay" id="loading">
            <div className="overlay__inner">
              <div className="overlay__content"></div>
              <span className="spinner"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header">
                <h2 className="mb-2 page-title">Graph Breakdown</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
              <form></form>
              <div className="form-group">
                <input
                  className="form-control"
                  id="order-report-date-range"
                  type="text"
                  name="daterange"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card">
                <div className="card-body" id="line-chart-section">
                  <canvas id="line-chart" width="500" height="500"></canvas>
                </div>
                <div className="card-body">
                  <p>
                    {" "}
                    Notes:
                    <br />
                    1. Taxes/VAT and shipping have already been included in
                    revenue.
                    <br />
                    2. Revenue does not include refunds (dashboard revenue =
                    revenue - refunds). <br />
                    3. Manual COGS = Manual COGS + Custom Order Expense.
                    <br />
                    4. Refunds are calculated on the original order date. Not
                    the day the refund was issued. (The dashboard calculates
                    refunds on the date the refund was issued.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphBreakdown;

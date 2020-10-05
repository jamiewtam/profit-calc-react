import React from "react";

const GraphBreakdown = (props) => {
  return (
    <div class="dashboard-wrapper">
      <div class="dashboard-finance" id="line-chart-report">
        <div class="container-fluid dashboard-content">
          <div class="overlay" id="loading">
            <div class="overlay__inner">
              <div class="overlay__content"></div>
              <span class="spinner"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="page-header">
                <h2 class="mb-2 page-title">Graph Breakdown</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
              <form></form>
              <div class="form-group">
                <input
                  class="form-control"
                  id="order-report-date-range"
                  type="text"
                  name="daterange"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="card">
                <div class="card-body" id="line-chart-section">
                  <canvas id="line-chart" width="500" height="500"></canvas>
                </div>
                <div class="card-body">
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

import React from "react";

import { FaPaperPlane, FaWrench, FaTrash } from "react-icons/fa";

import PageContainer from "../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../Layouts/Pages/CardContainer";

const COGSByDate = () => {
  return (
    <PageContainer pageTitle="COGS By Date">
      <CardContainer>
        <div className="table-responsive">
          <table
            className="table table-bordered first"
            id="user-id"
            data-userId=""
          >
            <thead className="thead-dark">
              <tr></tr>
              <th>Date</th>
              <th>COGS Total</th>
              <th>Submit</th>
            </thead>
            <tbody>
              <tr></tr>
              <td>
                <input id="cogsByDate-date" type="date" />
              </td>
              <td>
                <input id="cogsByDate-amount" placeholder="0" />
              </td>
              <td>
                <button
                  className="btn-outline-success btn-lg"
                  id="submit-cogsByDate-expense"
                >
                  <FaPaperPlane /> Submit
                </button>
              </td>
            </tbody>
          </table>
        </div>
        <br />
        <p>
          Each daily total will be included in the COGS amount located on the
          dashboard.
        </p>
        <hr />
        <div className="custom-control custom-switch">
          <form>
            <input
              className="custom-control-input"
              id="cogs-by-date-settings-toggle"
              type="checkbox"
              checked="checked"
            />
            <label
              className="custom-control-label"
              htmlFor="cogs-by-date-settings-toggle"
            >
              Include Manual COGS in Dashboard
            </label>
          </form>
        </div>
      </CardContainer>

      <CardContainer>
        <div className="table-responsive">
          <table className="table table-bordered first">
            <thead className="thead-dark">
              <th>Date</th>
              <th>Amount</th>
              <th>Edit/Remove</th>
            </thead>
            <tbody id="cogsByDate-table-body">
              <tr className="table-row" data-itemid="">
                <td>Date</td>
                <td>
                  <input value="10" />
                </td>
                <td>
                  <button className="btn btn-outline-dark .btn-lg">
                    <FaWrench /> Edit
                  </button>
                  <button className="btn btn-outline-danger .btn-lg">
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContainer>
    </PageContainer>
  );
};

export default COGSByDate;

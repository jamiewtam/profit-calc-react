import React from "react";

import { FaPaperPlane, FaWrench, FaTrash } from "react-icons/fa";
import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";

const MonthlyExpenses = () => {
  return (
    <PageContainer pageTitle="Monthly Expenses">
      <CardContainer>
        <div className="table-responsive">
          <table
            className="table table-bordered first"
            id="user-id"
            data-userId=""
          >
            <thead className="thead-dark">
              <tr></tr>
              <th>Expense Type</th>
              <th>Date</th>
              <th>Expense Name</th>
              <th>Amount </th>
              <th></th>
            </thead>
            <tbody>
              <tr></tr>
              <td>
                <select className="custom-select" id="expense-type">
                  <option value="1" selected="selected">
                    One Time Expense
                  </option>
                  <option value="0" disabled="disabled">
                    -- Repeating Expenses --{" "}
                  </option>
                  <option value="2">Repeat for 2 Months</option>
                  <option value="3">Repeat for 3 Months</option>
                  <option value="4">Repeat for 4 Months</option>
                  <option value="5">Repeat for 5 Months</option>
                  <option value="6">Repeat for 6 Months</option>
                  <option value="7">Repeat for 7 Months</option>
                  <option value="8">Repeat for 8 Months</option>
                  <option value="9">Repeat for 9 Months</option>
                  <option value="10">Repeat for 10 Months</option>
                  <option value="11">Repeat for 11 Months</option>
                  <option value="12">Repeat for 12 Months</option>
                </select>
              </td>
              <td>
                <input id="expense-date" type="month" value="2020-01" />
              </td>
              <td>
                <input id="expense-name" placeholder="name" />
              </td>
              <td>
                <input id="expense-amount" placeholder="0" />
              </td>
              <td>
                <button
                  className="btn-outline-success btn-lg"
                  id="submit-expense"
                >
                  <FaPaperPlane /> Submit
                </button>
              </td>
            </tbody>
          </table>
          <br />
          <p></p>
          For dashboard calculations, each expense is spread proportionally
          across the entire month it belongs to based on the dates selected.
        </div>
      </CardContainer>
      <CardContainer title="All Monthly Expenses">
        <div className="table-responsive" id="exp-table-body">
          <table className="table table-bordered first">
            <thead className="thead-dark">
              <th>Date</th>
              <th>Expense Name </th>
              <th>Amount</th>
              <th> </th>
            </thead>
            <tbody className="expense-page-table" id="expense-table-body">
              <tr className="table-row" data-itemid="">
                <td>Date</td>
                <td>Expense Name</td>
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

export default MonthlyExpenses;

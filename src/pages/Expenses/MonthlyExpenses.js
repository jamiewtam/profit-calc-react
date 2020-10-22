import React from "react";
//COMPONENTS
import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";
import {
  ButtonSuccess,
  ButtonEdit,
  ButtonRemove,
} from "../../components/General/Buttons";
import { Table, TableHead, TableBody } from "../../components/General/Table";
//FUNCTIONS
import { settingsReducer } from "../../util/factoryFunctions/general";

// const repeatingMonths = [
//   { title: "One Time Expense", value: 1, enabled: true },
//   { title: "-- Repeating Expenses --", value: 0, enabled: false },
//   { title: "Repeat for 2 Months", value: 2, enabled: true },
//   { title: "Repeat for 3 Months", value: 3, enabled: true },
//   { title: "Repeat for 4 Months", value: 4, enabled: true },
//   { title: "Repeat for 5 Months", value: 5, enabled: true },
//   { title: "Repeat for 6 Months", value: 6, enabled: true },
//   { title: "Repeat for 7 Months", value: 7, enabled: true },
//   { title: "Repeat for 8 Months", value: 8, enabled: true },
//   { title: "Repeat for 9 Months", value: 9, enabled: true },
//   { title: "Repeat for 10 Months", value: 10, enabled: true },
//   { title: "Repeat for 11 Months", value: 11, enabled: true },
//   { title: "Repeat for 12 Months", value: 12, enabled: true },
// ];

const submitMonthlyExpenseHeaders = [
  "Expense Type",
  "Date",
  "Expense Name",
  "Amount",
  "",
];

const allMonthlyExpensesHeaders = ["Date", "Expense Name", "Amount", ""];

const MonthlyExpenses = () => {
  // const [state, dispatch] = React.useReducer(settingsReducer, {
  //   numberOfOrdersSelector,
  //   taxesCollectedSelector,
  //   shippingChargedSelector,
  //   profitMarginSelector,
  //   cashbackDashboardSelector,
  //   shopifyLoanDashboardSelector,
  // });
  const handleChange = (inputName, value) => {
    // dispatch({
    //   type: "UPDATE",
    //   [inputName]: value,
    // });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await submitDashboardSettings(state);
  // };

  return (
    <PageContainer pageTitle="Monthly Expenses">
      <CardContainer>
        <Table>
          <TableHead headers={submitMonthlyExpenseHeaders} />
          <TableBody>
            <td>
              <select
                defaultValue="1"
                className="custom-select"
                onChange={(event) => handleChange(event.target.value)}
              >
                <option value="1">One Time Expense</option>
                <option value="0" disabled="disabled">
                  -- Repeating Expenses --
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
              <input id="expense-date" type="month" defaultValue="2020-01" />
            </td>
            <td>
              <input placeholder="name" />
            </td>
            <td>
              <input placeholder="0" />
            </td>
            <td>
              <ButtonSuccess title="Submit" />
            </td>
          </TableBody>
        </Table>
        <br />
        <p>
          For dashboard calculations, each expense is spread proportionally
          across the entire month it belongs to based on the dates selected.
        </p>
      </CardContainer>
      <CardContainer title="All Monthly Expenses">
        <Table>
          <TableHead headers={allMonthlyExpensesHeaders} />
          <TableBody>
            <td>Date</td>
            <td>Expense Name</td>
            <td>
              <input value="10" />
            </td>
            <td>
              <ButtonEdit style={{ marginRight: "10px" }} title="Edit" />
              <ButtonRemove title="Remove" />
            </td>
          </TableBody>
        </Table>
      </CardContainer>
    </PageContainer>
  );
};

export default MonthlyExpenses;

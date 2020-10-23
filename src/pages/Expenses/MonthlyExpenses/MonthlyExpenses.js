import React from "react";
import moment from "moment";
//COMPONENTS
import PageContainer from "../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../Layouts/Pages/CardContainer";
import { Table, TableHead, TableBody } from "../../../components/General/Table";
import Loading from "../../../components/General/Loading";
import {
  CreateNewMonthlyExpense,
  MonthlyExpenseFromDB,
  submitMonthlyExpenseHeaders,
  allMonthlyExpensesHeaders,
} from "./monthlyExpenseComponents";
//FUNCTIONS
import { settingsReducer } from "../../../util/factoryFunctions/general";
import {
  createMonthlyExpense,
  deleteMonthlyExpense,
  editMonthlyExpense,
} from "../../../api/expenses/monthlyExp/monthlyExpenses";
import { renderExpenseTable } from "../../../api/analytics/dashboard/dataFetching";

export const monthlyExpenseReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        ...action,
      };
    case "RESET":
      return {
        name: "Name",
        amount: 0,
        expenseDate: "2020-01",
        expenseTypeValue: 1,
      };
    default:
      return state;
  }
};

const MonthlyExpenses = () => {
  const [state, dispatch] = React.useReducer(monthlyExpenseReducer, {
    name: "",
    amount: "",
    expenseDate: "2020-01",
    expenseTypeValue: 1,
  });
  const [monthlyExpDB, setMonthlyExpDB] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [submit, setSubmit] = React.useState(false);

  const handleChange = (inputName, value) => {
    dispatch({
      type: "UPDATE",
      [inputName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createMonthlyExpense(state);
    dispatch({
      type: "RESET",
    });
  };

  const handleMonthlyExpChange = (expenseID, value) => {
    setMonthlyExpDB((prevMonthlyExpDB) => {
      const index = prevMonthlyExpDB.findIndex((exp) => {
        return exp._id === expenseID;
      });
      prevMonthlyExpDB[index].amount = value * 1;
      return prevMonthlyExpDB;
    });
  };

  const handleMonthlyExpEdit = (expenseID, amount) => {
    editMonthlyExpense(expenseID, amount);
  };

  const handleMonthlyExpDelete = (expenseID) => {
    deleteMonthlyExpense(expenseID);
    setSubmit((prevSubmit) => {
      return !prevSubmit;
    });
  };

  React.useEffect(() => {
    const startDateMonthlyExp = moment("1/1/1990");
    const endDateMonthlyExp = moment("1/1/2100");
    renderExpenseTable(startDateMonthlyExp, endDateMonthlyExp).then((data) => {
      setLoading(false);
      setMonthlyExpDB(data);
    });
  }, [submit]);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer pageTitle="Monthly Expenses">
      <CardContainer>
        <Table>
          <TableHead headers={submitMonthlyExpenseHeaders} />
          <TableBody>
            <CreateNewMonthlyExpense
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              state={state}
            />
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
            <MonthlyExpenseFromDB
              monthlyExpDB={monthlyExpDB}
              handleMonthlyExpChange={handleMonthlyExpChange}
              handleMonthlyExpEdit={handleMonthlyExpEdit}
              handleMonthlyExpDelete={handleMonthlyExpDelete}
            />
          </TableBody>
        </Table>
      </CardContainer>
    </PageContainer>
  );
};

export default MonthlyExpenses;

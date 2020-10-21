import React from "react";
import moment from "moment";

import CSVDownload from '../../components/Analytics/Dashboard/CSVDownload';
import PageContainer from "../../Layouts/Pages/PageContainer";
import { userContext } from "../../util/Context/userContext";
import calculateDashboardValues from '../../api/analytics/dashboard/index'
import Loading from "../../components/General/Loading";

import {
  CalendarComponent,
  ShowCalendarBackdrop,
  CalenderInput
} from "../../components/Analytics/Calendar/Calendar";
import { useShowCalendar } from "../../util/hooks/useShowCalendar";
import { DashboardCards } from "../../components/Analytics/Dashboard/Cards";
import MonthlyExpenseTable from '../../components/Analytics/Dashboard/MonthlyExpenseTable';


const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        ...action.data,
        loading: false,
      };
    case "SEND_REQUEST":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const Dashboard = () => {
  const [state, dispatch] = React.useReducer(dashboardReducer, {
    netRevenue: 0,
    netCOGS: 0,
    totalCustomerOrderExp: 0,
    grossMargin: 0,
    orderCount: 0,
    netTaxes: 0,
    totalNetShipping: 0,
    totalRefunds: 0,
    googleExp: 0,
    fbExp: 0,
    bingExp: 0,
    monthlyExpenses: 0,
    netCreditCardFees: 0,
    cashBackTotal: 0,
    shopifyLoanExp: 0,
    profitMarginPerc: 0,
    profit: 0,
    avgOrderValueTotal: 0,
    adCostPerOrderTotal: 0,
    avgCOGSTotal: 0,
    loading: true,
  });

  const [startDate, setStartDate] = React.useState({
    startDate: new Date(),
    dateCounter: 0,
  });
  const [endDate, setEndDate] = React.useState({
    endDate: new Date(),
  });

  const [showCalendar, handleCalendar] = useShowCalendar()

  const { storeName } = React.useContext(userContext);

  React.useEffect(() => {
    dispatch({ type: "SEND_REQUEST" });

    const startDateTest = moment(startDate.startDate).startOf('day');
    const endDateTest = moment(endDate.endDate).endOf('day');
    calculateDashboardValues(startDateTest, endDateTest, storeName).then(
      (data) => {
        dispatch({
          type: "UPDATE",
          data: data,
        });
      }
    );

    return () => {
      handleCalendar()
    }
  }, [endDate, storeName]);


  if (state.loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <ShowCalendarBackdrop
        handleCalendar={handleCalendar}
        showCalendar={showCalendar}
      />
      <PageContainer pageTitle="Dashboard">
        <div className="row">
          <CalendarComponent
            showCalendar={showCalendar}
            startDateItems={{
              startDate,
              setStartDate,
            }}
            endDateItems={{
              endDate,
              setEndDate,
            }}
          />
          <CalenderInput startDate={startDate.startDate} endDate={endDate.endDate} handleCalendar={handleCalendar} />
        </div>
        <div className="row">
          <DashboardCards state={state} />
        </div>
        <CSVDownload dashboardData={state} startDate={startDate.startDate} endDate={endDate.endDate} />
        <MonthlyExpenseTable monthlyExpenses={state.monthlyExpensesForTable} />
      </PageContainer>

    </React.Fragment>
  );
};

export default Dashboard;

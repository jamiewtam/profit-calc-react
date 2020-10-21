import React from "react";
import moment from "moment";

import PageContainer from "../../Layouts/Pages/PageContainer";
import { userContext } from "../../util/Context/userContext";
import Loading from "../../components/General/Loading";

import {
  CalendarComponent,
  ShowCalendarBackdrop,
  CalenderInput
} from "../../components/Analytics/Calendar/Calendar"
import { useShowCalendar } from "../../util/hooks/useShowCalendar";

import calculateOrderBreakdownValues from '../../api/analytics/orderBreakdown/dataFetching';

import Orders from '../../components/Analytics/OrderBreakdown/Orders';

const orderBreakdownReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        orders: action.data,
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

const OrderBreakdown = (props) => {
  const [state, dispatch] = React.useReducer(orderBreakdownReducer, {
    orders: [], loading: false
  })


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
    calculateOrderBreakdownValues(startDateTest, endDateTest, storeName).then(
      (data) => {
        dispatch({
          type: "UPDATE",
          data,
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
      <PageContainer pageTitle="Order Breakdown">
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
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body" id="bootstrap-table">
                <p> 1. The Order Breakdown report COGS only works with manual COGS. <br />2. Shipping and Taxes/VAT are informational columns. Their values have already been included in revenue. <br />3. COGS includes both manual COGS and the custom order expense.</p>
                <div
                  className="table-responsive">
                  <table className="table first table-striped">
                    <thead>
                      <tr>
                        <th style={{ width: "5%" }}>Order</th>
                        <th style={{ width: "10%" }}>Date</th>
                        <th style={{ width: "25%" }}> Products(s)</th>
                        <th>Revenue</th>
                        <th>COGS</th>
                        <th>Refunds</th>
                        <th>[Shipping]</th>
                        <th>[VAT]</th>
                        <th>Transaction Fees</th>
                        <th>Profit Margin %</th>
                        <th style={{ width: "10%" }}>Profit</th>
                      </tr>
                    </thead>
                    <tbody id="expense-table-body">
                      <Orders state={state.orders} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer >
    </React.Fragment>
  );
};

export default OrderBreakdown;

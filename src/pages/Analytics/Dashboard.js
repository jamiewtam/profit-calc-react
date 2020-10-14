import React from "react";
import moment from "moment";
import Card from "../../components/Dashboard/Card";
import PageContainer from "../../Layouts/Pages/PageContainer";
import { userContext } from "../../util/Context/userContext";
import calculateDashboardValues from "../../api/dashboard/index";
import Loading from "../../components/General/Loading";

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
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
  const [startDate, setStartDate] = React.useState(
    moment().subtract(6, "days").startOf("day")
  );
  const [endDate, setEndDate] = React.useState(moment());
  const { storeName } = React.useContext(userContext);

  console.log(state);

  // const startDate = moment().subtract(6, "days").startOf("day");
  // const endDate = moment()

  React.useEffect(() => {
    dispatch({ type: "SEND_REQUEST" });
    calculateDashboardValues(startDate, endDate, storeName).then((data) => {
      dispatch({
        type: "UPDATE",
        data,
      });
    });
  }, [startDate, endDate, storeName]);

  const cardArray = (state) => {
    console.log(state);
    return [
      {
        title: "Revenue",
        amount: `${state.netRevenue}`,
        arrowDirection: "up",
        hoverText: "Total Revenue - Discount - Refunds",
      },
      {
        title: "COGS",
        amount: `${state.netCOGS}`,
        arrowDirection: "down",
        hoverText: "Aliexpress + Manual COGS + CJ + COGS By Date (If Toggled)",
      },
      {
        title: "Custom Order Expense",
        amount: `${state.totalCustomerOrderExp}`,
        arrowDirection: "down",
        hoverText: "Shipping Cost By Country + Custom Order Exp.",
      },
      {
        title: "Gross Margin",
        amount: `${state.grossMargin}`,
        arrowDirection: "none",
        hoverText: "Revenue - COGS - Custom Order Exp.",
      },
      {
        title: "Number of Orders",
        amount: `${state.orderCount}`,
        arrowDirection: "none",
        hoverText: "Informational Card",
      },
      {
        title: "Taxes Collected",
        amount: `${state.netTaxes}`,
        arrowDirection: "none",
        hoverText: "Informational Card - Already Deducted Under Total Revenue",
      },
      {
        title: "Shipping Charged",
        amount: `${state.totalNetShipping}`,
        arrowDirection: "none",
        hoverText: "Informational Card - Already Deducted Under Total Revenue",
      },
      {
        title: "Refunds",
        amount: `${state.totalRefunds}`,
        arrowDirection: "none",
        hoverText: "Informational Card - Already Deducted Under Total Revenue",
      },
      {
        title: "Google Ads",
        amount: `${state.googleExp}`,
        arrowDirection: "down",
        hoverText: "Google Ad Spend",
      },
      {
        title: "Facebook Ads",
        amount: `${state.fbExp}`,
        arrowDirection: "down",
        hoverText: "Facebook Ad Spend",
      },
      {
        title: "Bing Ads",
        amount: `${state.bingExp}`,
        arrowDirection: "down",
        hoverText: "Bing Ad Spend",
      },
      {
        title: "Monthly Expenses",
        amount: `${state.monthlyExpenses}`,
        arrowDirection: "down",
        hoverText: "Monthly Expenses - Pro Rated",
      },
      {
        title: "Transaction Fees",
        amount: `${state.netCreditCardFees}`,
        arrowDirection: "down",
        hoverText: "Credit Card Fees",
      },
      {
        title: "Cashback Programs",
        amount: `${state.cashBackTotal}`,
        arrowDirection: "down",
        hoverText: "Aliexpress Cashback Programs",
      },
      {
        title: "Profit Margin %",
        amount: `${state.profitMarginPerc}`,
        arrowDirection: "none",
        hoverText: "Profit Margin %",
      },
      {
        title: "Profit",
        amount: `${state.profit}`,
        arrowDirection: "none",
        hoverText: "Total Revenue - All Expenses",
      },
    ];
  };

  const DashboardCards = ({ state }) => {
    return cardArray(state).map((cardElement) => {
      return (
        <Card
          title={cardElement.title}
          amount={cardElement.amount}
          arrowDirection={cardElement.arrowDirection}
          hoverText={cardElement.hoverText}
          key={cardElement.title}
        />
      );
    });
  };

  if (state.loading) {
    return <Loading />;
  }

  return (
    <PageContainer pageTitle="Dashboard">
      <div className="row">
        <div className="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
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
        <DashboardCards state={state} />
      </div>
    </PageContainer>
  );
};

export default Dashboard;

import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { IconContext } from "react-icons";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import Header from "./components/Navigation/Header";

import Loading from "./components/General/Loading";

import { userContext, useGetUser } from "./util/Context/userContext";


// PAGES --------------------------------------------------------
import Dashboard from "./pages/Analytics/Dashboard";
import OrderBreakdown from "./pages/Analytics/OrderBreakdown";
import GraphBreakdown from "./pages/Analytics/GraphBreakdown";


// Expense pages

import MonthlyExpenses from "./pages/Expenses/MonthlyExpenses";
import AdAccountLogins from "./pages/Expenses/AdAccountLogins/AdAccountLogins";
import AliexpressCOGS from "./pages/Expenses/COGS/Aliexpress";
import COGSByDate from "./pages/Expenses/COGS/COGSByDate";
import CJDropshipping from "./pages/Expenses/COGS/CJDropshipping";

// Settings Pages
import GatewaySettings from "./pages/Settings/gatewaySettings/GatewaySettings";
import GeneralSettings from "./pages/Settings/generalSettings/GeneralSettings";
import VATSettings from "./pages/Settings/VatSettings";
import DashboardCustomization from "./pages/Settings/DashboardCustomization";

// Footer Pages
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import TermsAndConditions from "./pages/Footer/TermsAndConditions";
import AboutUs from "./pages/Footer/About";

const Routing = () => {
  return (
    <React.Fragment>
      {/* Analytics */}
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/reports/orders">
        <OrderBreakdown />
      </Route>
      <Route path="/reports/lineChart">
        <GraphBreakdown />
      </Route>
      {/* Expenses - COGS */}
      <Route path="/manualcogs">
        <Dashboard />
      </Route>
      <Route path="/aliexpressCogs">
        <AliexpressCOGS />
      </Route>
      <Route path="/cjDropshippingCogs">
        <CJDropshipping />
      </Route>
      <Route path="/cogsByDate">
        <COGSByDate />
      </Route>
      <Route path="/monthlyExpenses">
        <MonthlyExpenses />
      </Route>
      <Route path="/adAccountLogins">
        <AdAccountLogins />
      </Route>
      <Route path="/customCountryExpenses"></Route>
      {/* Settings */}
      <Route path="/settings">
        <GatewaySettings />
      </Route>
      <Route path="/generalSettings">
        <GeneralSettings />
      </Route>
      <Route path="/vatSettings">
        <VATSettings />
      </Route>
      <Route path="/dashboardSettings">
        <DashboardCustomization />
      </Route>

      {/* Footer Pages */}
      <Route path="/privacyPolicy">
        <PrivacyPolicy />
      </Route>
      <Route path="/termsAndConditions">
        <TermsAndConditions />
      </Route>
      <Route path="/about">
        <AboutUs />
      </Route>
    </React.Fragment>
  );
};

function App() {
  const [user, loading] = useGetUser();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="dashboard-main-wrapper">
      <Router>
        <userContext.Provider value={user}>
          <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
            <Header />
            <Routing />
          </IconContext.Provider>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;

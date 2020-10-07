import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Navigation/Header";
// PAGES --------------------------------------------------------
import Dashboard from "./pages/Analytics/Dashboard";

// Expense pages

import MonthlyExpenses from "./pages/Expenses/MonthlyExpenses";
import AdAccountLogins from "./pages/Expenses/AdAccountLogins/AdAccountLogins";
import AliexpressCOGS from "./pages/Expenses/COGS/Aliexpress";
import COGSByDate from "./pages/Expenses/COGS/COGSByDate";
import CJDropshipping from "./pages/Expenses/COGS/CJDropshipping";

// Settings Pages
import GatewaySettings from "./pages/Settings/GatewaySettings";
import GeneralSettings from "./pages/Settings/generalSettings/GeneralSettings";
import VATSettings from "./pages/Settings/VatSettings";
import DashboardCustomization from "./pages/Settings/DashboardCustomization";

// Footer Pages
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import TermsAndConditions from "./pages/Footer/TermsAndConditions";
import AboutUs from "./pages/Footer/About";

const Routing = () => {
  return (
    <div>
      {/* Analytics */}
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/reports/orderbreakdown">
        <Dashboard />
      </Route>
      <Route path="/reports/lineChart">
        <Dashboard />
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
    </div>
  );
};

function App() {
  return (
    <div className="dashboard-main-wrapper">
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  );
}

export default App;

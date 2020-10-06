import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Navigation/Header";
// Pages
import Dashboard from "./pages/Analytics/Dashboard";

import GatewaySettings from "./pages/Settings/gatewaySettings";
import GeneralSettings from "./pages/Settings/generalSettings/generalSettings";

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
      <Route path="/aliexpressCogs"></Route>
      <Route path="/cjDropshipping"></Route>
      <Route path="/cogsByDate"></Route>
      <Route path="/monthlyExpenses"></Route>
      <Route path="/adPlatforms"></Route>
      <Route path="/customCountryExpenses"></Route>
      {/* Settings */}
      <Route path="/settings">
        <GatewaySettings />
      </Route>
      <Route path="/generalSettings">
        <GeneralSettings />
      </Route>
      <Route path="/vatSettings"></Route>
      <Route path="/dashboardSettings"></Route>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  );
}

export default App;

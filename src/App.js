import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Analytics/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
        {/* Expenses */}
        <Route path="/manualcogs">
          <Dashboard />
        </Route>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Login from "../components/admin-ui/containers/components/login"
import Dashboard from "../components/admin-ui/containers/components/dashboard"
import history from "../components/admin-ui/utilities/history";

const Routes = () => {
  return (
    <Router history={history}>
	      <Switch>
	     	  <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
	      </Switch>
    </Router>

  );
};

export default Routes
import React from "react";
import { Route, Switch } from "react-router-dom";
import TabPanel from "./TabPanel";

const Home = () => {
  return <h3> </h3>;
};
const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};
const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Setting/:cubo" component={TabPanel} />

    <Route component={NoMatchPage} />
  </Switch>
);

export default AppRoutes;

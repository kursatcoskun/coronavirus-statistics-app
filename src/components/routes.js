import React from "react";
import { Route, Switch } from "react-router-dom";
import globalPage from "../containers/globalPage";
import countryListPage from "../containers/countryListPage";
import AboutPage from "../containers/aboutPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/global" component={globalPage} />
      <Route exact path="/countries" component={countryListPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="*" exact={true} component={globalPage} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Switch } from "react-router-dom";
import Donations from "../pages/Donations";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PaymentWindow from "../pages/PaymentWindow";
import Institutions from "../pages/Institutions";
import CRUDInstitution from "../pages/CRUDInsti";
import Route from "./Route";
// import ForgotPassword from '../pages/ForgotPassword';
// import ResetPassword from '../pages/ResetPassword';
// import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signup" exact component={SignUp} />
    <Route path="/" exact component={SignIn} />
    <Route path="/donations" exact component={Donations} isPrivate />
    <Route path="/payment" exact component={PaymentWindow} isPrivate />
    <Route path="/Institutions" exact component={Institutions} isPrivate />
    <Route
      path="/CRUDInstitutions"
      exact
      component={CRUDInstitution}
      isPrivate
    />
    {/* <Route path="/signup" component={SignUp} /> */}
    {/* <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate /> */}
  </Switch>
);

export default Routes;

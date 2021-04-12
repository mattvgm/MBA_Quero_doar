import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Donations from '../pages/Donations';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PaymentWindow from '../pages/PaymentWindow';
import Institutions from '../pages/Institutions';
// import ForgotPassword from '../pages/ForgotPassword';
// import ResetPassword from '../pages/ResetPassword';
// import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignUp} />
    <Route path="/donations" exact component={Donations} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/payment" exact component={PaymentWindow} />
    <Route path="/Institutions" exact component={Institutions} />
    {/* <Route path="/signup" component={SignUp} /> */}
    {/* <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate /> */}
  </Switch>
);

export default Routes;
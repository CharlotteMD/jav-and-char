import React from 'react';
import { Switch, Route } from 'react-router-dom';


import ThankYou from './ThankYou';


const ThankYouRoutes = () => {
  return (
    <Switch>
      <Route exact path="/thankyou" component={ThankYou} />
    </Switch>
  );
};

export default ThankYouRoutes;

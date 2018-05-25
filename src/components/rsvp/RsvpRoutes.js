import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Rsvp from './Rsvp';

const WeddingRoutes = () => {
  return (
    <Switch>
      <Route exact path="/weddings/muslim/rsvp" component={Rsvp} />
    </Switch>
  );
};

export default WeddingRoutes;

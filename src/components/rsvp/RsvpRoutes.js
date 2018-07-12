import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Rsvp from './Rsvp';
import GuestList from './GuestList';

const WeddingRoutes = () => {
  return (
    <Switch>
      <Route exact path="/weddings/muslim/rsvp" component={Rsvp} />
      <Route exact path="/weddings/muslim/guestlist" component={GuestList} />
    </Switch>
  );
};

export default WeddingRoutes;

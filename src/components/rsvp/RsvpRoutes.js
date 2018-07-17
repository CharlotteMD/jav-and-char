import React from 'react';
import { Switch, Route } from 'react-router-dom';


import RsvpGoogle from './RsvpGoogle';
// import GuestList from './GuestList';

const WeddingRoutes = () => {
  return (
    <Switch>
      <Route exact path="/nikah/rsvp" component={RsvpGoogle} />
      {/* <Route exact path="/weddings/muslim/guestlist" component={GuestList} /> */}
    </Switch>
  );
};

export default WeddingRoutes;

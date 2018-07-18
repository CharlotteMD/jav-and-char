import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Weddings from './weddings';
import Muslim from './muslim';

const WeddingRoutes = () => {
  return (
    <Switch>
      <Route exact path="/nikah/info" component={Muslim} />
      <Route exact path="/nikah/celebration" component={Weddings} />
    </Switch>
  );
};

export default WeddingRoutes;

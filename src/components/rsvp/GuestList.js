import React from 'react';
import Axios from 'axios';

import GuestList from './GuestList';
// import Auth from '../../lib/Auth';

class Rsvp extends React.Component {

  state = {
    rsvp: {
      firstName: '',
      lastName: ''
    }
  };



  render() {
    return (
      <div>
        <h1>Guest List</h1>
       
      </div>
    );
  }
}

export default Rsvp;

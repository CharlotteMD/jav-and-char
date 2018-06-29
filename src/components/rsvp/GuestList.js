import React from 'react';
import Axios from 'axios';

// import GuestList from './GuestList';
// import Auth from '../../lib/Auth';

class GuestList extends React.Component {

  state = {
    rsvp: {
      firstName: '',
      lastName: ''
    }
  };

  componentDidMount() {
    Axios
      .get('/api/weddings/muslim/guestlist')
      .then(res => {
        this.setState({ rsvp: res.data }, () => console.log(this.state.rsvp));
     })
      .catch(err => console.log(err));
}

  render() {

    return (
      <div className="guestlist">
        <h1>Guest List</h1>
        
       <h2> {this.state.rsvp.firstName}</h2>
       
        </div>
        );
      }
    }


export default GuestList;

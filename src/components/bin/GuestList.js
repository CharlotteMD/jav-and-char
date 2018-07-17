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
    console.log('hitting');
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

        {/* { this.state.rsvps.map((rsvp) => {
          return <p key={rsvp.firstName}>{rsvp.firstName}</p>;
        })} */}

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYO2hq72CSMofOgymhiYkf4TS_NScqwXweYilRaZZPkmExsg/viewform?embedded=true" width="700" height="520" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>


      </div>
    );
  }
}


export default GuestList;

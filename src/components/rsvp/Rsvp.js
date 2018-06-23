import React from 'react';
import Axios from 'axios';

import RsvpForm from './RsvpForm';
// import Auth from '../../lib/Auth';

class Rsvp extends React.Component {

  state = {
    rsvp: {
      firstName: '',
      lastName: '',
      email: '',
      diet: ''
    }
  };

  // doSomething = function (e) {
  //   alert('it works!');
  //   e.preventDefault();
  // }

  handleRsvpChange = ({ target: { name, value }}) => {
    console.log('hitting');
    const rsvp = Object.assign({}, this.state.rsvp, { [name]: value });
    this.setState({ rsvp });
    console.log('rsvp info: ', rsvp);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hitting');

    Axios
      .post('/api/weddings/muslim/rsvp', this.state.rsvp)
      .then(res => {
        console.log('the response from the api', res);
        // Auth.setToken(res.data.token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div>
        <h1>RSVP to our Shariah Wedding</h1>
        <RsvpForm
          rsvp={this.state.rsvp}
          handleRsvpChange={this.handleRsvpChange}
          handleSubmit={this.handleSubmit}
          // doSomething={this.doSomething}
        />
      </div>
    );
  }
}

export default Rsvp;

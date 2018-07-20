import React from 'react';
import Axios from 'axios';

import GuestbookForm from './GuestbookForm';

import Auth from '../../lib/Auth';

class GuestbookNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuestbookSubmit = this.handleGuestbookSubmit.bind(this);

    this.state = {
      guestbook: {
        name: '',
        comment: ''
      }
    };
  }


  handleGuestbookChange = ({ target: { name, value }}) => {
    const guestbook = Object.assign({}, this.state.guestbook, { [name]: value });
    this.setState({ guestbook });
    console.log('guestbook info: ', guestbook);
  }


  handleGuestbookSubmit = (e) => {
    e.preventDefault();
    console.log('hitting');

    Axios
      .post('/api/guestbook/new', this.state.guestbook)
      .then(res => {
        console.log('the response from the api', res);
        // Auth.setToken(res.data.token);
        this.props.history.push('/guestbook');
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div>
        <h1>Write in our Guestbook</h1>

        { !Auth.isAuthenticated() &&

        <h3>Please <a className="nav-link" href="/login">Login</a> to write in our Guestbook.</h3> }

        { Auth.isAuthenticated() &&
        <GuestbookForm
          guestbook={this.state.guestbook}
          handleGuestbookChange={this.handleGuestbookChange}
          handleGuestbookSubmit={this.handleGuestbookSubmit}
          // doSomething={this.doSomething}
        />}
      </div>
    );
  }
}


export default GuestbookNew;

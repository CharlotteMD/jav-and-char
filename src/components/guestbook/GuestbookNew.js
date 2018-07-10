import React from 'react';
import Axios from 'axios';

import GuestbookForm from './GuestbookForm';

class GuestbookNew extends React.Component {

  state = {
    guestbook: {
      name: '',
      comment: ''
    }
  };


  handleGuestbookChange = ({ target: { name, value }}) => {
    console.log('hitting');
    const guestbook = Object.assign({}, this.state.guestbook, { [name]: value });
    this.setState({ guestbook });
    console.log('guestbook info: ', guestbook);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hitting');

    Axios
      .post('/api/weddings/muslim/guestbook', this.state.guestbook)
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
        <GuestbookForm
          guestbook={this.state.guestbook}
          handleGuestbookChange={this.handleGuestbookChange}
          handleSubmit={this.handleSubmit}
          // doSomething={this.doSomething}
        />
      </div>
    );
  }
}

export default Guestbook;

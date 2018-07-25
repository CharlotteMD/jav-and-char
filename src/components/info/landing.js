import React from 'react';
// import Axios from 'axios';

import { BrowserRouter as Link } from 'react-router-dom';

import Auth from '../../lib/Auth';


import { Carousel } from 'react-bootstrap';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class Landing extends React.Component {


  render() {

    return (
      <div className="container">

         <h2>Javed & Charlotte<br />request the pleasure of your company<br /> to celebrate our Nikah wedding!</h2>

        { !Auth.isAuthenticated() &&
          <h3>Please <a href="/login">login</a> to see more information.</h3>
        }

        { Auth.isAuthenticated() &&

          <div className="details">

            <div>
              <h3>Sunday 26th August, 2018</h3>
              <h3>The Qazi Family Home, Croydon</h3>
            </div>

            <div className="click">

              <a href="/nikah/info"><button className="hibiscus" >
                If Shariah marriage is new to you, click here to find out more about what is involved and why we have decided to do it.
              </button></a>

              <a href="/nikah/celebration"><button className="hibiscus">
                You can read about our plans for the day and how we intend to celebrate with you all here.
              </button></a>

              <a href="/nikah/rsvp"><button className="hibiscus">
                We hope you can join us! Please RSVP here.
              </button></a>

            </div>

          </div>}

      </div>
    );
  }
}

export default Landing;

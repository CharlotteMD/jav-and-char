import React from 'react';

import Auth from '../../lib/Auth';


class ThankYou extends React.Component {


  render() {

    return (
      <div>

        { !Auth.isAuthenticated() &&
          <h3>Please <a href="/login">login</a> to see our wedding.</h3>
        }

        { Auth.isAuthenticated() &&

          <div className="celebrations">

            <h2>Thank you NAME</h2>
            <h3 className="subhead">We had such a lovely day and we are so happy you could share it with us!</h3>
            <p>Photo of Jav and Char from wedding</p>
            <h4 className="message">UNIQUE MESSAGE</h4>

            <h4 className="lotsoflove">Lots of love from Jav and Char xxx</h4>
          </div>}

      </div>
    );
  }
}

export default ThankYou;

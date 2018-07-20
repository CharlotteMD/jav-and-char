import React from 'react';


// import Axios from 'axios';

// import { Carousel } from 'react-bootstrap';

// import Map from './map';

import Auth from '../../lib/Auth';


class Weddings extends React.Component {


  render() {

    return (
      <div>

        { !Auth.isAuthenticated() &&
          <h3>Please <a href="/login">login</a> to see the details of our wedding.</h3>
        }

        { Auth.isAuthenticated() &&

          <div className="celebrations">

          <h2>DATE OF NIKAH</h2>
          <h3>Time</h3>
          <h3>Location</h3>

          <p>We invite you to celebrate with us on **** at Javed’s family home ***.</p>

          <iframe style={{width: 600, height: 450}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcxZChCr-dUgRRUkMxV3ydNU&key=AIzaSyC29Ol986YU38HL1WT-j1U9gZ7wZ0KDhNI" allowFullScreen></iframe>

          <p>The ceremony will start at ***, followed by a party in the garden. We hope you will be able to witness our Nikah ceremony and then celebrate with us for the afternoon.<br></br>

            <br></br>The dress code is smart casual - for gentlemen, chinos and a shirt would be perfect.  For ladies, the dress code is a little stricter. In respect of the Muslim tradition, we ask that ladies cover skin. Trousers or a long skirt would be suitable, and if you could cover your shoulders and arms for the ceremony, that would be fab.  Please avoid low cut tops if possible. We hope you will join us on the bouncy castle so no need for anything too fancy!<br></br>

            <br></br>All the food and drink will be halal.  Please let us know if you have any other dietary requirements.<br></br>

            <br></br>If you have any questions, please email us at <a href="mailto:javandchar@gmail.com">JavandChar@gmail.com</a>.<br></br>

          </p>

          <div className="click">
            <p>If Shariah marriage is new to you,
              <a href="/nikah/info">
                click here to find out more about what is involved and why we have decided to do it.
              </a>
              <br />
              We hope you can join us!
              <a href="/nikah/rsvp">
                Please RSVP here.
              </a>
            </p>
          </div>

        </div>}
      </div>
    );
  }
}

export default Weddings;

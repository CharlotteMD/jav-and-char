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

            <h2>Sunday 26th August, 2018</h2>
            <h3 className="subhead">25 Croham Valley Road, South Croydon</h3>

            <p>We invite you to celebrate with us on Sunday 26th August, at Javed’s family home in Croydon.</p>

            <p>Details for timings for the day will follow shortly - watch this space! We hope you will be able to witness our Nikah ceremony and then celebrate with us for the afternoon.</p>

            <h4>Dress Code</h4>
            <p>The dress code is smart casual - for gentlemen, chinos and a shirt would be perfect.  For ladies, the dress code is a little stricter. In respect of the Muslim tradition, we ask that ladies cover skin. Trousers or a long skirt would be suitable, and if you could cover your shoulders and arms for the ceremony, that would be fab.  Please avoid low cut tops if possible. We hope you will join us on the bouncy castle so no need for anything too fancy!</p>

            <h4>Food</h4>
            <p>All the food and drink will be halal.  Please let us know if you have any other dietary requirements when you <a href="/nikah/rsvp">RSVP</a>.</p>

            <h4>Directions</h4>

            <div className="drive">
              <iframe style={{width: 300, height: 300, margin: 20}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIZ_bO6MAdkgR_7hd3o_H3zs&key=AIzaSyC29Ol986YU38HL1WT-j1U9gZ7wZ0KDhNI" allowfullscreen></iframe>

              <div className="address">
                <p>
                  <span>The Address is:</span><br></br><br></br>
                25 Croham Valley Road,<br></br>
                South Croydon,<br></br>
                London,<br></br>
                CR2 7JE
                </p>
              </div>
              <div className="hotels">
                <p><span>Hotels nearby are:</span>
                  <br></br><br></br>
                  <ul>
                    <li><a href="https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-croydon-south-a212.html?cid=GLBC_CROCOO">Premier Inn (circa 3 mins)</a></li>
                    <li><a href="https://www.travelodge.co.uk/hotels/484/London-South-Croydon-hotel?WT.tsrc=GHA_Organic&utm_campaign=GHA_London%20South%20Croydon&utm_medium=GHA_Organic&utm_source=google">Travelodge (circa 6 mins)</a></li>
                    <li><a href="http://www3.hilton.com/en/hotels/united-kingdom/hilton-london-croydon-CROHNHN/index.html?WT.mc_id=zELWAKN0EMEA1HI2DMH3LocalSearch4DGGenericx6CROHNHN">Hilton (circa 10 mins)</a></li>
                    <li><a href="https://www.hallmarkhotels.co.uk/hotels/hallmark-hotel-london-croydon-aerodrome/">Hallmark, London Croydon Aerodrome (circa 12 mins)</a></li>
                    <li><a href="http://www.grandsapphire.co.uk/">The Grand Sapphire, Hotel (circa 12 mins)</a></li>
                  </ul>
                </p>
              </div>
              <div className="park">
                <p>There is parking along <span>Melville Avenue</span>, approximately a 10 minute walk from the house, or else you could try <span>Crest Road</span>, roughly a 10 minute walk. Slightly nearer is <span>Ballard's Way</span> (approx 5 min walk) or <span>Manor Way</span> which is 8 mins away. If you are lucky, you may find parking on <span>Croham Valley Road</span>.  The postcode for Jav's house is <span>CR2 7JE</span>.</p>
              </div>

            </div>


            <div className="click">
              <a href="/nikah/info"><button className="hibiscus info">
                If Shariah marriage is new to you, click here to find out more about what is involved and why we have decided to do it.
              </button></a>

              <a href="/nikah/rsvp"><button className="hibiscus rsvp">
                Please RSVP here.
              </button></a>

              <a href="mailto:javandchar@gmail.com"><button className="hibiscus email" >
                If you have any questions, please email us or ask one of our mothers!
              </button></a>
            </div>

          </div>}
      </div>
    );
  }
}

export default Weddings;

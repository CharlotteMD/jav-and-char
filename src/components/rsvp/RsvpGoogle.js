import React from 'react';


// class RsvpGoogle extends React.Component {
import Auth from '../../lib/Auth';


const RsvpGoogle = () => {


  // render() {

  return (
    <div className="guestlist">
      <h1>RSVP</h1>

      { !Auth.isAuthenticated() &&
        <h3>Please <a href="/login">login</a> to RSVP to our wedding.</h3>
      }

      { Auth.isAuthenticated() &&

      <iframe class="google" src="https://docs.google.com/forms/d/e/1FAIpQLSdYO2hq72CSMofOgymhiYkf4TS_NScqwXweYilRaZZPkmExsg/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>}

    </div>
  );
};



export default RsvpGoogle;

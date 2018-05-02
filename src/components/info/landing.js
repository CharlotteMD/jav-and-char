import React from 'react';
// import Axios from 'axios';

import { BrowserRouter as Link } from 'react-router-dom';


import { Carousel } from 'react-bootstrap';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class Landing extends React.Component {


  render() {

    return (
      <div>
        <h2>Welcome to our Wedding!</h2>

        <h3>Introduction - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>


        <Carousel>
          <Carousel.Item>
            <img height={750} alt="Harrods repository" src="../assets/images/jc1.jpg" />
            <Carousel.Caption>
              <h3>A weekend stroll along the Thames Path</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={750} alt="CW ice-skating" src="../assets/images/jc6.jpg" />
            <Carousel.Caption>
              <h3>Early on in our relationship, ice-skating in Canary Wharf</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={750} alt="Turkish palace" src="../assets/images/jc9.jpg" />
            <Carousel.Caption>
              <h3>On holiday in Istanbul</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h4>How we met</h4>
        <p>On Charlottes first weekend in London, we met in Italian Restaurant/Nightclub Mare Motos on the Kings Road in Chelsea.  There was lots of dancing and then a first date at Brew Café in Putney, followed by a second date at Winter Wonderland Hyde Park where Jav booked the worst circus ever and Charlotte failed at hoopla!  We have now been together for 3 years and are so excited to be extending that to forever 💖</p>

        <h4>The Romantic Proposal</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div>
          <p>We are so excited to celebrate with you all! <a href="/weddings">Click here</a> for more information about our Wedding.</p>
        </div>
      </div>
    );
  }
}

export default Landing;

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

        <div className="container">

          <h3>Introduction - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>

          <div className="us">
            <Carousel>
              <Carousel.Item>
                <div className="carousel">
                  <img className="carousel-images" alt="Harrods repository" src="../assets/images/jc1.jpg" />
                  <Carousel.Caption>
                    <h3>A weekend stroll along the Thames Path</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel">
                  <img className="carousel-images" alt="Skiing" src="../assets/images/jc3.jpg" />
                  <Carousel.Caption>
                    <h3>Ski dead</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel">
                  <img className="carousel-images" alt="Anniversary in Singapore" src="../assets/images/jc5.jpg" />
                  <Carousel.Caption>
                    <h3>Our first anniversary in Singapore</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>

            <div className="met">
              <div className="mare-motos">
                <h4>How we met</h4>
                <p>On Charlottes first weekend in London, we met in Italian Restaurant/Nightclub Mare Motos on the Kings Road in Chelsea.  There was lots of dancing and then a first date at Brew Café in Putney, followed by a second date at Winter Wonderland Hyde Park where Jav booked the worst circus ever and Charlotte failed at hoopla!  We have now been together for 3 years and are so excited to be extending that to forever 💖</p>
              </div>

              <div className="proposal">
                <h4>The Romantic Proposal</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>

          <div>
            <p>We are so excited to celebrate with you all! <a href="/weddings">Click here</a> for more information about our Wedding.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Landing;

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
      <div className="container">

         <h2>Javed & Charlotte<br />request the pleasure of your company<br /> to celebrate our Nikah wedding!</h2>


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

      <div className="click">
        <p>Click here for links</p>
      </div>
      </div>
    </div>
    );
  }
}

export default Landing;

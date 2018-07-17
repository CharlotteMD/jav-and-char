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
                <h3>Weekends along the Thames</h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel">
              <img className="carousel-images" alt="Fulham" src="../assets/images/fulham.jpg" />
              <Carousel.Caption>
                <h3>QPR vs Fulham!</h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel">
              <img className="carousel-images" alt="Henley" src="../assets/images/henley.jpg" />
              <Carousel.Caption>
                <h3>Henley</h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel">
              <img className="carousel-images" alt="Dressed to impress" src="../assets/images/wedding.jpg" />
              <Carousel.Caption>
                <h3>Dressed to impress for a friend's wedding</h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel">
              <img className="carousel-images" alt="Theatre" src="../assets/images/theatre.jpg" />
              <Carousel.Caption>
                <h3>At the theatre</h3>
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
        <p>We wanted to put together all the information in one place.  If Shariah marriage is new to you, <a href="/nikah/info">click here to find out more about what is involved and why we have decided to do it.</a> <br />  You can read about our plans for the day and <a href="/nikah/celebration">how we intend to celebrate with you all here.</a><br /> We hope you can join us! <a href="/nikah/rsvp">Please RSVP here.</a>To see who's coming and to leave us a message, <a href="/guestbook">click here.</a></p>
      </div>
      </div>
    </div>
    );
  }
}

export default Landing;

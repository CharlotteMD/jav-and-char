import React from 'react';

import Auth from '../../lib/Auth';
import { Carousel } from 'react-bootstrap';


class ThankYou extends React.Component {


  render() {

    return (
      <div>

        { !Auth.isAuthenticated() &&
          <h3>Please <a href="/login">login</a> to see our wedding.</h3>
        }

        { Auth.isAuthenticated() &&

          <div className="celebrations">

            <h2>Thank you</h2>
            <h3 className="subhead">We had such a lovely day and we are so happy you could share it with us!</h3>
            <div>
              <Carousel>
                <Carousel.Item>
                  <div className="carousel">
                    <img className="carousel-images" alt="Our wedding" src="../assets/images/wed1.png" />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="carousel">
                    <img className="carousel-images" alt="Our wedding" src="../assets/images/wed2.JPG" />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="carousel">
                    <img className="carousel-images" alt="Our wedding" src="../assets/images/wed3.JPG" />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="carousel">
                    <img className="carousel-images" alt="Our wedding" src="../assets/images/wed4.png" />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="carousel">
                    <img className="carousel-images" alt="Our wedding" src="../assets/images/wed5.png" />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="carousel">
                    <img className="carousel-images" alt="Our wedding" src="../assets/images/wed6.png" />
                  </div>
                </Carousel.Item>
              </Carousel>
            <h4 className="message">We are still buzzing from the weekend! Thank you so much for being there. We were overwhelmed by the love and kindness from you all. We hope you enjoyed the day as much as we did! Proper thank yous to follow but in the meantime please know how much we love you all and appreciate your support.</h4>

            <h4 className="lotsoflove">Lots of love from Jav and Char xxx</h4>
          </div>
        </div>
      }
    </div>
    )
  }
}

export default ThankYou;

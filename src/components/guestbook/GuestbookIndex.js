import React, { Component } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

// import moment from 'moment';
// import SearchBar from  '../utility/SearchBar';
// import _ from 'lodash';
import Auth from '../../lib/Auth';

class GuestbookIndex extends Component {
      state = {}


      componentDidMount() {
        Axios
          .get('/api/guestbook')
          .then(res => this.setState({ guestbook: res.data }))
          .catch(err => console.log(err));
      }



      render() {


        return(
          <div className="auction-index">
            <div className="container">
              <h1>Guestbook</h1>


              <div>

                { !Auth.isAuthenticated() &&

                <h3>Please <a className="nav-link" href="/login">Login</a> to view our Guestbook.</h3> }

                { Auth.isAuthenticated() &&

                <div className="row">




                </div> }


              </div>
            </div>
          </div>
        );
      }
}


export default GuestbookIndex;

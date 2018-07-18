import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './scss/style.scss';

import Navbar from './components/utility/Navbar';
import Footer from './components/utility/Footer';

import AuthRoutes from './components/auth/AuthRoutes';

// import UserEdit from './components/auth/UserEdit';

import Landing from './components/info/Landing';
import WeddingRoutes from './components/info/WeddingRoutes';
import RsvpRoutes from './components/rsvp/RsvpRoutes';
import GuestbookRoutes from './components/guestbook/GuestbookRoutes';


// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>

          <Navbar />
          <Link to="/home"><div className="logo"><h1>Jav & Char</h1></div></Link>

          <AuthRoutes />

          <Route exact path="/home" component={Landing}/>
          <WeddingRoutes />
          <RsvpRoutes />
          <GuestbookRoutes />

          {/* <Route exact path="/users/:id/edit" component={UserEdit}/> */}
          {/* <Route exact path="/users/:id" component={UserProfile}/> */}

          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

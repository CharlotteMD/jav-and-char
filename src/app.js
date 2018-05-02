import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './scss/style.scss';

import Navbar from './components/utility/Navbar';
import Footer from './components/utility/Footer';

import AuthRoutes from './components/auth/AuthRoutes';

import UserEdit from './components/auth/UserEdit';

import Landing from './components/info/Landing';


// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>

          <Navbar />
          <Link to="/"><div className="logo"><h1>React App</h1></div></Link>

          <AuthRoutes />

          <Route exact path="/" component={Landing}/>

          <Route exact path="/users/:id/edit" component={UserEdit}/>
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

import React from 'react';
import { withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav >
      <div className="navs">
        <div className="navbar">


          {/* { !Auth.isAuthenticated() &&
              <a className="nav-link" href="/register"><button>Register</button></a>
          }

          { !Auth.isAuthenticated() &&
              <a className="nav-link" href="/login"><button>Login</button></a>
          } */}

          <a className="nav-link" href="/home"><button>Home</button></a>

          <a className="nav-link" href="/nikah/celebration"><button>Wedding Info</button></a>

          <a className="nav-link" href="/nikah/rsvp"><button>RSVP</button></a>

          <a className="nav-link" href="/guestbook"><button>Guestbook</button></a>

          {/* {Auth.isAuthenticated() &&
              <a className="nav-link" href={`/users/${Auth.getPayload().userId}`}><button>Your Profile</button></a>
          }

          {Auth.isAuthenticated() &&
              <a href="/" className="nav-link" onClick={logout}><button>Logout</button></a>
          } */}

        </div>
      </div>

    </nav>

  );
};

export default withRouter(Navbar);

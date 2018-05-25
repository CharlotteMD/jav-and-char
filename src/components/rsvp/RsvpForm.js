import React from 'react';

const RsvpForm = ({ handleChange, handleSubmit, rsvp }) => {
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={rsvp.firstName}
            className="form-control"
          />
          {/* { errors.email && <p>{errors.email}</p>} */}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={rsvp.lastName}
            className="form-control"
          />
          {/* { errors.email && <p>{errors.email}</p>} */}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={rsvp.email}
            className="form-control"
          />
          {/* { errors.email && <p>{errors.email}</p>} */}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="diet"
            placeholder="Dietary Requirements"
            onChange={handleChange}
            value={rsvp.diet}
            className="form-control"
          />
          {/* { errors.email && <p>{errors.email}</p>} */}
        </div>

        <button className="main-button">RSVP</button>
      </form>
    </div>
  );
};

export default RsvpForm;

import React from 'react';

const RsvpForm = ({ handleRsvpChange, handleSubmit, rsvp }) => {


// const RsvpForm = (props) => {
//   const { handleRsvpChange, handleSubmit, rsvp } = props;
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleRsvpChange}
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
            onChange={handleRsvpChange}
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
            onChange={handleRsvpChange}
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
            onChange={handleRsvpChange}
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

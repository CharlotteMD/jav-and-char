import React from 'react';

const GuestbookForm = ({ handleGuestbookChange, handleGuestbookSubmit, guestbook }) => {


// const GuestbookForm = (props) => {
//   const { handleGuestbookChange, handleGuestbookSubmit, guestbook } = props;
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="container">
      <form onSubmit={handleGuestbookSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleGuestbookChange}
            value={guestbook.name}
            className="form-control"
          />
          {/* { errors.email && <p>{errors.email}</p>} */}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="comment"
            placeholder="Write your message here"
            onChange={handleGuestbookChange}
            value={guestbook.comment}
            className="form-control"
          />
          {/* { errors.email && <p>{errors.email}</p>} */}
        </div>


        <button className="main-button">Submit your message</button>
      </form>
    </div>
  );
};

export default GuestbookForm;

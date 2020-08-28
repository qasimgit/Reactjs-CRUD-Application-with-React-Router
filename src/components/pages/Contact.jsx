import React from "react";

export const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="your name"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Complain</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

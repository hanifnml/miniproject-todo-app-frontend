import React, { useState } from 'react';
import './ResetForgot.css';


function ResetForm() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 center">
          <h3>Reset Password</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="new-pass">New Password</label>
              <input 
                type="password" className="form-control" placeholder="New Password" id="new-pass"
                required
              ></input>
            </div>

            <div className="form-group">
              <label for="confirm-pass">Confirm Password</label>
              <input 
                type="password" className="form-control" placeholder="Confirm Password" id="confirm-pass" 
                required
              ></input>
            </div>

            <button type="submit" value="confirm" className="btn btn-primary btn-md btn-block">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default ResetForm

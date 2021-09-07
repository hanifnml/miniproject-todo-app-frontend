import React from 'react';


function Reset() {
  return (
    <div>
      <form className="form-reset">
        <h3>Reset Password</h3>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"></input>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="Password"></input>
        </div>

        <button className="btn btn-primary btn-block">Send</button>
      </form>
    </div>
  )
}

export default Reset;

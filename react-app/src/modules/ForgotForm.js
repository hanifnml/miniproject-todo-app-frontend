import React from 'react';

function ForgotForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 center">
          <h3>Forgot Password</h3>
          <p>Send Reset Confirmation to your Email</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" className="form-control" placeholder="example@mail.com" id="email"
                required
              ></input>
            </div>

            <button type="submit" value="send" className="btn btn-primary btn-md btn-block">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotForm

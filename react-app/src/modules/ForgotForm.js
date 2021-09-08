import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import validator from 'validator';

function ForgotForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const [emailError, setEmailError] = useState('')

  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Email valid!')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  const [ show, setShow ] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="resetforgot container">
      <div className="row justify-content-center">
        <div className="col-md-4 center">
          <h3>Forgot Password</h3>
          <p>Send Reset Confirmation to your Email</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" className="form-control" placeholder="example@mail.com" 
                id="email"
                onChange={(e) => validateEmail(e)}
                required
              ></input>
            </div>
            <span>{emailError}</span>

            <Link
              to='/reset-password'
              className="btn btn-primary btn-md btn-block"
              onClick={handleShow}  
            >Send</Link>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Email Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>Reset code has been sent to your email</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotForm

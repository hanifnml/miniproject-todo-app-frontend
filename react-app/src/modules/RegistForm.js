import React, { useState } from 'react'
import { BrowserRouter, Redirect, Link, useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import './RegistForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoImage from '../assets/img/undraw_To_do_list_re_9nt7.svg'
import validate from './validateRegistration'

// Redux
import { signupUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const RegistForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [values, setValue] = useState({
    email: '',
    password: '',
    password2: ''
  })
  const [errors, setErrors] = useState({})
  const [redirected, setRedirected] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))
    if (Object.keys(errors).length === 0) {
      dispatch(
        signupUser(
          {
            ...values,
            role: "user",
          },
          history
        )
      );
    }
  }

  if (redirected) {
    return (
      <BrowserRouter>
        <Redirect to="/login" />
      </BrowserRouter>
    )
  }

  return (
    <div className="register container-local">
      <div className="wrapping">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <h3>TODO List App</h3>
            <h3>Sign Up</h3>
          </div>
          <div className="form-wrap mb-2">
            <label className="mb-1" htmlFor="email">Email address</label>
            <input 
              className="form-input" 
              type="text" 
              name="email" 
              placeholder="Enter email address" 
              value={values.email}
              onChange={handleChange}
            />
            { errors.email && <small className="text-error">{errors.email}</small> }
          </div>
          <div className="form-wrap mb-2">
            <label className="mb-1" htmlFor="password">Password</label>
            <input 
              className="form-input" 
              type="password" 
              name="password" 
              placeholder="Type your password" 
              value={values.password}
              onChange={handleChange}
            />
            { errors.password && <small className="text-error">{errors.password}</small> }
          </div>
          <div className="form-wrap mb-4">
            <label className="mb-1" htmlFor="password">Confirm Password</label>
            <input 
              className="form-input" 
              type="password" 
              name="password2" 
              placeholder="Re-type your password"
              value={values.password2}
              onChange={handleChange}
            />
            { errors.password2 && <small className="text-error">{errors.password2}</small> }
          </div>
          <button className="btn1 mb-3" type="submit">Sign Up</button>
          <p className="text-center">Already have account? <Link to="/login">Sign In</Link></p>
        </Form>
        <div className="information">
          <img src={TodoImage} alt="todo list" />
        </div>
      </div>
    </div>
  )
}

export default RegistForm;
import React from 'react'
import { Dropdown, SplitButton } from 'react-bootstrap'
import ProfilePict from '../assets/img/profile-pict.jpeg'
import './Header.css'

const Header = ({ name }) => {
  return (
    <nav className="header">
      <div className="head-container">
        <span className="logo">TODO List App</span>
        <div className="profile">
          <img src={ProfilePict} alt="profile-picture" />
          <SplitButton
            variant="danger"
            title={"Hello, " + name}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Sign Out</Dropdown.Item>
          </SplitButton>
           
        </div>
      </div>
    </nav>
  )
}

export default Header
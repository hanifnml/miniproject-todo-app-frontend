import React, { useState } from 'react'
import { Button, ButtonGroup, ButtonToolbar, Card, CardGroup } from 'react-bootstrap'
import UserProfile from '../components/UserProfile'
import MyVerticallyCenteredModal from '../components/createTODO'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AdminPage.css'

function AdminPage() {
  const [ modalShow, setModalShow ] = useState(false);

  return (
    <div className="admin container">
      <h1>Hi, Admin!</h1>
      <h4>How do you feel today?</h4>

      {/* Cards Information */}
      <CardGroup>
        <Card className="text-center left-card">
          <Card.Body>
            User Report
          </Card.Body>
        </Card>
        <span id="space-card"></span>
        <Card className="text-center right-card">
          <Card.Body>
            <Card.Text><span id="number">23</span></Card.Text>
            <Card.Text>Registered Users</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>  

      {/* User Lists */}
      <h3>User List</h3>
      <FontAwesomeIcon
        icon='user-plus' 
        size="1x"
        id="user-plus"
        onClick={() => setModalShow(true)} />

      <UserProfile />
      
      {/* BUtton Toolbar */}
      <ButtonToolbar aria-label="Toolbar with button groups" className='button'>
        <ButtonGroup className="me-2">
          <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button> <Button>5</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default AdminPage

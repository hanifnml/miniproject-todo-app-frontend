import React from 'react'

function AdminPage() {
  return (
    <div>
      <h1>Hi, Admin!</h1>
      <h4>How do you feel today?</h4>

      {/* Cards Information */}
      <div className="cards">
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
              <li className="users-report">
                <p>User Reports</p>
              </li>
              <li className="registered-users">
                <p id="number">23</p>
                <p>Registered Users</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End of Cards Information */}

      <h3>User List</h3>
      
    </div>
  )
}

export default AdminPage

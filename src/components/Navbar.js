import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

 function Navbar() {
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
          <Link className="brand-logo" to="/" >ToDoLIst</Link>
          <ul className="left">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to='/add-list'>Add task</NavLink></li>
            <li><NavLink to='/list-detail'>List Detail</NavLink></li>
            <li><NavLink to='/completed-list'>Completed List</NavLink></li>
          </ul>
        </div>
      </nav> 
    )
}
export default withRouter(Navbar);

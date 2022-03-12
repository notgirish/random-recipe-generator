import React from 'react'

export default function Navbar() {
  return (

    <nav>
      <div className="container">

        <i className="fa fa-solid fa-burger fa-3x"></i>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">ToDo List</a></li>
          <li><a href="#">GitHub Repo</a></li>
        </ul>

      </div>
    </nav>
  )
}

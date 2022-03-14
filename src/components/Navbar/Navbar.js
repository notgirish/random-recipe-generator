import { Link } from "react-router-dom"

export default function Navbar() {
  return (

    <nav>
      <div className="container">

        <i className="fa fa-solid fa-burger fa-3x"></i>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">ToDo List</Link></li>
          <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub Repo update link</a></li>
        </ul>

      </div>
    </nav>
  )
}

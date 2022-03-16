import { Link } from "react-router-dom"

export default function Navbar() {

  function expandNav(){
    document.body.classList.toggle('nav-open');
  }

  return (

    <header>
      <div className="container">

        <a href="/"><i className="fa fa-solid fa-burger fa-3x"></i></a>

        <button className="nav-menu" onClick={expandNav}>
          <span className="hamburger"></span>
        </button>

        <nav>
          <ul>
            <li><Link to="/" onClick={expandNav}>Home</Link></li>
            <li><Link to="/todo" onClick={expandNav}>ToDo List</Link></li>
            <li><a href="https://github.com/notgirish/random-recipe-generator" target="_blank" rel="noreferrer">GitHub Repo</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

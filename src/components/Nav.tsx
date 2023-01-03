import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="ml-2.5">
          <li>
            <Link to="/"><i className="fa fa-home mr-1"></i>Home</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </>
  )
}

export default Nav

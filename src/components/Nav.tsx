import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="px-2 justify-center flex">
          <li>
            <Link className="py-1 block" to="/"><i className="fa fa-home mr-1"></i>Home</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </>
  )
}

export default Nav

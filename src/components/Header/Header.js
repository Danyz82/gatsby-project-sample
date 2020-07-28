import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/product/">Product</Link>
        </li>
        <li>
          <Link to="/examples/">Examples</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
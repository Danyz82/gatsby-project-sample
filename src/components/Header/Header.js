import React from "react";
import { Link } from "gatsby";

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
        <li>
          <Link to="/gallery/">Gallery</Link>
        </li>
        <li>
          <Link to="/shop/">Shop</Link>
        </li>
        <li>
          <Link to="/team/">Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

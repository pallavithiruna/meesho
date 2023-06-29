import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
function Secondnav() {
  return (
    <div>
      <nav className="Secondnav">
      <hr></hr>
        <ul>
          <li><Link className="link" to="/ethnic">Women Ethnic</Link></li>
          <li><Link  className="link"to="/western">Women Western</Link></li>
          <li><Link className="link"to="/men">Men</Link></li>
          <li><Link className="link"to="/kids">Kids</Link></li>
          <li><Link className="link"to="/beauty">Beauty & Health</Link></li>
          <li><Link className="link"to="/jewellery">Jewellery & Accessories</Link></li>
          <li><Link className="link" to="/foot">Bags & Footwear</Link></li>
          <li><Link className="link"to="/electronic">Electronics</Link></li>
          <li><Link className="link"to="/">Home</Link></li>
        </ul>
      </nav>
      <hr></hr>
    </div>
  );
}

export default Secondnav;

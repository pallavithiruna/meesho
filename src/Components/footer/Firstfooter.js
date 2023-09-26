import React from 'react'
import './Footer.css';
function Firstfooter() {
  return (
    <div>
      <footer className="parent">
        <div className="child child1">
           <ul>
            <li><h2>Shop Non-Stop on Meesho</h2></li>
            <li style={{fontSize: "16px"}}><pre>Trusted by more than 1 Crore Indians
                Cash on Delivery | Free Delivery</pre></li>
            <li><a href="#">
              <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="google play"/></a>
              <a href="#">
                <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="app store"/></a></li>
        </ul>
        </div>
        <div className="child">
            <ul>
                <li><h2>Reach out to us</h2></li>
                <li className='list'>
                <a href="#"><img src="https://images.meesho.com/images/pow/facebook.png" alt="facebook"/></a>
                <a href="#"><img src="https://images.meesho.com/images/pow/instagram.png"alt="instagram"/></a>
                <a href="#"><img src="https://images.meesho.com/images/pow/youtube.png"alt="youtube"/></a>
                <a href="#">
                  <img src="https://images.meesho.com/images/pow/linkedin.png"alt="linkedin"/></a>
                <a href="#"><img src="https://images.meesho.com/images/pow/twitter.png"alt="twitter"/></a>
                </li>
            </ul>
        </div>
        <div className="child">
            <h2>Contact Us</h2>
             Fashnear Technologies Private Limited,<br/>
             CIN: U74900KA2015PTC082263<br/>
             06-105-B, 06-102,(138 Wu)<br/>
             Vaishnavi Signature, No. 78/9,<br/>
             Outer Ring Road, Bellandur,<br/>
             Varthur Hobli, Bengaluru-560103,<br/>
             Karnataka, India<br/>
             E-mail address:<br/>
             query@meesho.com<br/>
             © 2015-2023 Meesho.com<br/>
        </div>
    </footer>
      
    </div>
  )
}

export default Firstfooter

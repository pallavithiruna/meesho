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
            <li><a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=188dcbcdf9437b-0ea57d048e68ae-26031d51-144000-188dcbcdf951a2">
              <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="google play"/></a>
              <a href="https://apps.apple.com/us/app/meesho/id1457958492">
                <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="app store"/></a></li>
        </ul>
        </div>
        <div className="child">
            <ul>
                <li><h2>Reach out to us</h2></li>
                <li className='list'>
                <a href="https://www.facebook.com/meeshosupply"><img src="https://images.meesho.com/images/pow/facebook.png" alt="facebook"/></a>
                <a href="https://www.instagram.com/meeshoapp/"><img src="https://images.meesho.com/images/pow/instagram.png"alt="instagram"/></a>
                <a href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw"><img src="https://images.meesho.com/images/pow/youtube.png"alt="youtube"/></a>
                <a href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.meesho.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmeesho">
                  <img src="https://images.meesho.com/images/pow/linkedin.png"alt="linkedin"/></a>
                <a href="https://twitter.com/Meesho_Official/"><img src="https://images.meesho.com/images/pow/twitter.png"alt="twitter"/></a>
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

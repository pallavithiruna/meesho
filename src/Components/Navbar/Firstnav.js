import'./nav.css'
function Firstnav() {
  return (
    <div>
      <nav className='Firstnav'>
        <hr></hr>
      <div className='first'>
      <ul>
        <li className='meesho'>meesho</li>
      </ul>
      </div>
      <div className='second'>
        <ul>
          <li><a href="#">Download from Google Play</a></li>
          <li><a href="#">Download from App Store</a></li>
          <li><a href="#">Become a Supplier</a></li>
        </ul>
      </div>
      </nav>
    </div>
  )
}

export default Firstnav

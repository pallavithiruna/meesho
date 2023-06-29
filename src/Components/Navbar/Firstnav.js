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
          <li><a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">Download from Google Play</a></li>
          <li><a href="https://apps.apple.com/us/app/meesho/id1457958492">Download from App Store</a></li>
          <li><a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=header">Become a Supplier</a></li>
        </ul>
      </div>
      </nav>
    </div>
  )
}

export default Firstnav

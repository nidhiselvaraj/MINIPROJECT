import React, { useState } from "react"
import "./Header.css"


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <h1>Delicious Dining</h1>
            
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
             
              <li>
                <a href='#home'><h3>Home</h3></a>
              </li>
              <li>
                <a href='#features'><h3>Features</h3></a>
              </li>
              <li>
                <a href='#booking'><h3>Booking</h3></a>
              </li>
              <li>
                <a href='#offer'><h3>OfferZone</h3></a>
              </li>
              <li>
                <a href='#update'><h3>Update</h3></a>
              </li>
              <li>
                <a href='#details'><h3>Details</h3></a>
              </li>
              <li>
                <a href='#cancel'><h3>Cancellation</h3></a>
              </li>

            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times close home-btn'></i> : <i className='fa fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
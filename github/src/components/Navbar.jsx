import React from 'react'
import style from './Navbar.module.css'


const Navbar = () => {
  return (
   <>
   <div className={style.nav}>
    <div className={style.nav1}>
        <div className={style.logoBox}>
        <i class="fa-brands fa-github"></i>
        </div>
        <div className={style.links}>
        <p>Product  </p>
        <p>Solutions</p>
        <p>Open source</p>
        <p>Pricing</p>
        
        </div>
        
    </div>
    <div className={style.nav2}>
        <div className={style.searchBox}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder='search or jump to' />
        </div>
        <button className={style.bttn1}>sign in</button>
        <button  className={style.bttn2}>sign up</button>
    </div>

   </div>
   </>
  )
}

export default Navbar
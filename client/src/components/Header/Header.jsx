import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import { Search, Cart } from "../index"
import { Context } from '../../utils/context';
import "./Header.scss";


function Header() {

  const [scrolled, setScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const {cartCount} = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY
    if(offset > 200) {
      setScroll(true)
    } else {
      setScroll (false)
    }

  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
        <div className="header-content">
          <ul className='left'>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>SONICSPECTRUM.</div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)}/>
            <AiOutlineHeart />
            <span className='cart-icon' onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart}/>}
      {showSearch && <Search setShowSearch={setShowSearch}/>}
      
    </>
  )
}

export default Header
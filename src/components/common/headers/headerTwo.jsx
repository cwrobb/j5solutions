import React, { useState } from 'react'
import black_logo from "../../..//assets/images/black-logo.png"
import white_logo from "../../..//assets/images/white-logo.png"
import { Link, useLocation } from 'react-router-dom'
import useStickyHeader from '../../../hooks/useStickyHeader'
import { menuList } from '../../../utlits/fackData/menuList'
import MobileMenu from './mobileMenu'

const HeaderTwo = () => {
  useStickyHeader()
  const [othersOption, setOtherOption] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="navbar-area ">
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} isHomePage={isHomePage} />

      <div className="desktop-nav ">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand me-0" to="/">
              <img src={isHomePage ? white_logo : black_logo} className={isHomePage ? "white-logo" : "black-logo"} alt="logo" />
            </Link>

            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                {
                  menuList.map(({ id, dropDown, label, path }) => {
                    return (
                      <li key={id} className="nav-item">
                        <Link to={path} className={`nav-link ${dropDown.length ? "dropdown-toggle" : ""} `}>
                          {label}
                        </Link>
                        {
                          dropDown.length &&
                          <ul className="dropdown-menu">
                            {
                              dropDown.map(({ id, path, label }) => {
                                return (
                                  <li key={id} className="nav-item">
                                    <Link to={path} className="nav-link">{label}</Link>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        }

                      </li>
                    )
                  })
                }

              </ul>

              
            </div>
          </nav>
        </div>
      </div>

       <div className="others-option-for-responsive">
                    <div className="container">

                        <div className="dot-menu" onClick={() => setOtherOption(!othersOption)}>
                            <div className="inner">
                                <div className="circle circle-one"></div>
                                <div className="circle circle-two"></div>
                                <div className="circle circle-three"></div>
                            </div>
                        </div>
                        <div className='menu-icon'>
                            <i className={`ri-menu-line ${menuActive ? "d-none" : "d-block "}`} onClick={() => setMenuActive(true)}></i>
                            <i className={`ri-close-line  ${menuActive ? "d-block " : "d-none"}`} onClick={() => setMenuActive(false)}></i>
                        </div>    
                    </div>
        </div>
    </div>
  )
}

export default HeaderTwo

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const [showMobileNav, setshowMobileNav] = useState(false)
    function handleHam() {
        setshowMobileNav(showMobileNav ? false : true)
    }
    return (
        <>
            <nav>
                <div className='nav-content'>
                    <div className='image-container'>
                        <Link to='/'>
                            <img src={require('../logo.png')} alt='Company logo' />
                        </Link>
                    </div>
                    <div className='nav-tabs'>
                        <div className='home tabs'>
                            <Link to='/'>
                                <span className='tabs'>Home</span>
                            </Link>
                        </div>
                        <div className='aboutus tabs'>
                            <Link to='/about-us'>
                                <span className='tabs'>About Us</span>
                            </Link>
                        </div>
                        {/* <div className='categories dropdown tabs' >
                            <label htmlFor='check'>
                                <span className='tabs '>categories</span>
                                <i className="fa-solid fa-caret-down" style={{ paddingLeft: '5px' }}></i>
                            </label>


                            <input type='checkbox' id='check' />
                            <ul className='dropdown-menu'>
                                <li>
                                    Wireless Earplugs
                                </li>
                                <li>

                                    Wired Earphones
                                </li>
                                <li>

                                    Headphone
                                </li>
                                <li>

                                    Aux Cables
                                </li>
                                <li>

                                    Wireless Neckband Earphone
                                </li>
                                <li>

                                    Mobile Cables
                                </li>
                                <li>

                                    Charging Adapters
                                </li>
                            </ul>
                        </div> */}
                        <div className='shop tabs'>
                            <Link to='/shop'>
                                <span className='tabs'>shop</span>
                            </Link>
                        </div>
                        <div className='contactUs tabs'>
                            <Link to='/contact-us'>
                                <span className='tabs'>contact us</span>
                            </Link>
                        </div>
                        <div className='catalogue tabs'>
                            <Link to='/'>
                                <span className='tabs'>catalogue</span>
                            </Link>
                        </div>
                        <div className='icons tabs'>
                            <Link to='/'>
                                <i className="fa-solid fa-magnifying-glass" style={{ color: '#f37c20' }}></i>
                            </Link>
                            <Link to='/'>
                                <i className="fa-solid fa-user" style={{ color: '#f37c20' }}></i>
                            </Link>
                            <Link to='/'>
                                <i className="fa-solid fa-cart-shopping" style={{ color: '#f37c20' }}></i>
                            </Link>
                        </div>
                    </div>
                    {/* Mobile Part */}
                    <div className='hamburger-menu' onClick={handleHam} >
                        {showMobileNav ? <i className="fa-solid fa-close" color='red'></i> : <i className="fa-solid fa-bars" color='#212121'></i>}

                    </div>
                </div>

                <div className={`nav-mobile-content ${showMobileNav ? " " : "hide"}`} >
                    <div className='nav-mobile-tabs'>
                        <div className='mobile-tabs'>
                            <div className='nav-tabs-mobile'>
                                <div className='nav-mobile-header'>
                                    <div className='account'>
                                        <div className='content'>
                                            <span> <Link to='/'>
                                                <i className="fa-solid fa-user" style={{ color: '#fff' }}></i> My Account
                                            </Link> </span>
                                            <span><Link to='/'>
                                                <i className="fa-solid fa-cart-shopping" style={{ color: '#fff' }} ></i>My Cart
                                            </Link></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='home tabs-mobile'>
                                    <Link to='/'>
                                        <span className='tabs'>Home</span>
                                    </Link>
                                </div>
                                <hr />
                                <div className='aboutus tabs-mobile'>
                                    <Link to='/about-us'>
                                        <span className='tabs'>About Us</span>
                                    </Link>
                                </div>
                                <hr />
                                {/* <div className='categories dropdown tabs-mobile' >
                                    <label htmlFor='check-mobile'>
                                        <span className='tabs'>categories</span>
                                        <i className="fa-solid fa-caret-down" style={{ paddingLeft: '5px' }}></i>
                                    </label>


                                    <input type='checkbox' id='check-mobile' />
                                    <ul className='dropdown-menu'>
                                        <li>
                                            Wireless Earplugs
                                        </li>
                                        <li>

                                            Wired Earphones
                                        </li>
                                        <li>

                                            Headphone
                                        </li>
                                        <li>

                                            Aux Cables
                                        </li>
                                        <li>

                                            Wireless Neckband Earphone
                                        </li>
                                        <li>

                                            Mobile Cables
                                        </li>
                                        <li>

                                            Charging Adapters
                                        </li>
                                    </ul>
                                </div> */}
                                {/* <hr /> */}
                                <div className='shop tabs-mobile'>
                                    <Link to='/shop'>
                                        <span className='tabs'>shop</span>
                                    </Link>
                                </div>
                                <hr />
                                <div className='contactUs tabs-mobile'>
                                    <Link to='/contact-us'>
                                        <span className='tabs'>contact us</span>
                                    </Link>
                                </div>
                                <hr />
                                <div className='catalogue tabs-mobile'>
                                    <Link to='/'>
                                        <span className='tabs'>catalogue</span>
                                    </Link>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
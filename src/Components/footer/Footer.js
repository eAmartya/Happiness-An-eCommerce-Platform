import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className='footer-content marg'>

                <div className='footer-head'>
                    <div className='footer-title ourOfficies'>
                        <p className='office-title'>Our Officies</p>
                    </div>
                    <div className='officeAddress'>



                        <div className='registeredOffice'>
                            <i className="fa-solid fa-map-location-dot" style={{ color: '#ffffff' }}></i>
                            <span className='officeName' >Registered Office</span>
                            <p className='address'>
                                JLPL, industrial Area, Sec 82, Mohali, India
                            </p>
                        </div>
                        <div className='corporateOffice'>
                            <i className="fa-solid fa-map-location-dot" style={{ color: '#ffffff' }}></i>
                            <span className='officeName' >Corporate Office</span>
                            <p className='address'>
                                Silver Tower, Business Bay, Dubai

                            </p>
                        </div>
                        <div className='salesOffice'>
                            <i className="fa-solid fa-map-location-dot" style={{ color: '#ffffff' }}></i>
                            <span className='officeName' >Sales Office
                            </span>
                            <p className='address'>
                                Metro plaza city market, Lohgarh road, Zirakpur

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-website-content marg'>
                <div className='about-company ' >
                    <div className='logo-image'>
                        <img src={require('../logo.png')} alt='logo' />
                    </div>
                    <div className='aboutCompany foot-content'>
                        Laborum ipsum est anim nostrud amet eiusmod.
                        Laborum ipsum est anim nostrud amet eiusmod.
                        Laborum ipsum est anim nostrud amet eiusmod.
                    </div>
                </div>
                <div className='ourLinks foot-content'>
                    <div className='links fot-title'>
                        <span>Our Links</span>
                    </div>
                    <div className='fot-links'>

                        <div className='home animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Home</span>
                        </div>
                        <div className='aboutus animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>About Us</span>
                        </div>
                        <div className='shop animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Shop</span>
                        </div>
                        <div className='contactUs animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Contact us</span>
                        </div>
                        <div className='catalogue animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Catalogue</span>
                        </div>
                    </div>
                </div>
                <div className='myAccount foot-content'>
                    <div className='myaccount fot-title'>
                        <span>My Account</span>
                    </div>
                    <div className='fot-links'>

                        <div className='cart animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Cart</span>
                        </div>
                        <div className='wishlist animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Whislist</span>
                        </div>
                        <div className='distributor animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Become Distributor</span>
                        </div>
                        <div className='wrranty animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Wrranty Policy</span>
                        </div>
                        <div className='privacy animate'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div> 
                <div className='contactUs foot-content  special-foot-content'>
                    <div className='fot-title'>
                        <span>Contact us</span>
                    </div>
                    <div className='fot-links'  >

                        <div className='mail'>
                            <Link to='mailto:@gmail.com'>
                                <i className="fa-solid fa-envelope"></i>
                                <span>@gmail.com</span>
                            </Link>
                        </div>
                        <div className='phone'>
                            <Link to='@gmail.com'>
                                <i className="fa-solid fa-phone"></i>
                                <span>+917878787878</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='follow foot-content special-foot-content'>
                    <div className='fot-title'>
                        <span>follow us</span>
                    </div>
                    <div className='social-icons'>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-brands fa-pinterest-p"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div className='copyright marg'>
                <p>©2023 HAPPINESS. All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer
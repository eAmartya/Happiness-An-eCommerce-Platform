import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import HomeCarousel from '../carousel/HomeCarousel'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import ProductCard from '../productcard/ProductCard'


function Home() {
    const products = [
        {
            productImage: 'neckband-min.webp',
            productName: 'R2 Stero Wireless Neckband',
            originalPrice: '2199',
            discountedPrice: '699.00',
            discountPercentage: '54%'
        },
        {
            productImage: 'buds.webp',
            productName: 'M5 Round Earplugs',
            originalPrice: '2,500',
            discountedPrice: 0,
            discountPercentage: '54%'
        },
        {
            productImage: 'neck-025-min-2048x2048.webp',
            productName: 'R3 Stero Wireless Neckband',
            originalPrice: '1999.00',
            discountedPrice: '699.00',
            discountPercentage: '54%'
        },
        {
            productImage: 'headphones.webp',
            productName: 'Ultra Bass Bluetooth Headphone',
            originalPrice: '2,999.00',
            discountedPrice: '1,599.00',
            discountPercentage: '54%'
        },
        {
            productImage: 'budcase.webp',
            productName: '11i Earplugs',
            originalPrice: '2,599.00',
            discountedPrice: '1,199.00',
            discountPercentage: '54%'
        }, {
            productImage: 'ctoi2-min.webp',
            productName: 'USB To C VOOC Zeal Charging Cable',
            originalPrice: '799.00',
            discountedPrice: '449.00',
            discountPercentage: '54%'
        }, {
            productImage: 'usbtomicro2-min.webp',
            productName: 'USB To Micro Zest Charging Cable',
            originalPrice: '399.00',
            discountedPrice: '199.00',
            discountPercentage: '54%'
        }
    ]
    return (
        <>
            <Navbar />
            <section className='' id='carousel'>
                <div id='carousel-content'>
                    <HomeCarousel />
                </div>
            </section>
            <section id='trending title'>
                <div className='title-content marg'>
                    <div className='title'>
                        <h2>trending categories</h2>
                    </div>
                </div>
            </section>
            <section id='trending-pics'>
                <div className='title-content-img marg'>
                    <div className='trending-topics-img'>
                        <div className='earplugs trending-img'>
                            <Link to=''>
                                <img src={require('../assets/earbuds.png')} alt='earplug trending topic' />
                                <p>Earplugs</p>
                            </Link>
                        </div>
                        <div className='headphone trending-img'>
                            <Link to=''>

                                <img src={require('../assets/headphone.png')} alt='earplug trending topic' />
                                <p>Headphone</p>
                            </Link>
                        </div>
                        <div className='charger trending-img'>
                            <Link to=''>

                                <img src={require('../assets/neckband.png')} alt='earplug trending topic' />
                                <p>Neckband</p>
                            </Link>
                        </div>
                        <div className='charger trending-img'>
                            <Link to=''>

                                <img src={require('../assets/charger.png')} alt='earplug trending topic' />
                                <p>Charging Adapter</p>
                            </Link>
                        </div>
                        <div className='cable trending-img'>
                            <Link to=''>

                                <img src={require('../assets/cable.png')} alt='earplug trending topic' />
                                <p>Data Cable </p>
                            </Link>
                        </div>
                        <div className='carcharger trending-img'>
                            <Link to=''>

                                <img src={require('../assets/carcharger.png')} alt='earplug trending topic' />
                                <p>Car Charger</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='discount'>
                <div className='discount-content'>
                    <div className='discount-title'>
                        <h2 className='d-title'> Get Huge Discounts On</h2>
                    </div>
                    <div className='discount-subtitle'>
                        <h2 className='d-subtitle'>Mobile Phone Accessories
                        </h2>
                    </div>
                    <div className='discount-card marg'>
                        <div className='cards'>
                            <Card />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className='trendingProducts'>
                <div className='marg productcard-contain'>
                    <section id='trending-products'>
                        <div className='title-content trending-products'>
                            <div className='title'>
                                <h2>our trending Products</h2>
                            </div>
                        </div>
                    </section>
                    <section className='productCarousel'>
                        <div className='productcard-Carousel'>
                            {products.map((ele, indx) => {
                                // console.log(ele);
                                return (
                                    <ProductCard key={indx + 'product'} productDetails={ele} />)

                            })}
                        </div>
                    </section>

                </div>
            </section>
            <section className='banner'>
                <div className='banner-img'>
                    <Link to='/'>

                        <img src={require('../assets/exclusive-banner.jpg')} alt='Discount banner' />
                    </Link>
                </div>
            </section>
            <section className='accessories'>
                <div className='marg accessories-contain'>
                    <section id='trending-products'>
                        <div className='title-content trending-products'>
                            <div className='title'>
                                <h2>Best Quality Mobile Phone Accessories</h2>
                            </div>
                        </div>
                    </section>
                    <section id='qualityAccessories'>{products.map((ele, indx) => {
                        // console.log(ele);
                        return (
                            <ProductCard key={indx + 'product'} productDetails={ele} />)

                    })}</section>
                </div>
            </section>
            <section className='info-banner'>
                <div className='marg'>
                    <div className='image-div'>
                        <div className='img-1 img-collection'>
                            <Link to='/'>

                                <img src={require('../assets/neckband-blue.webp')} alt='desc banner' />
                            </Link>
                        </div>
                        <div className='img-1 img-collection'>
                            <Link to='/'>

                                <img src={require('../assets/skinz.jpg')} alt='desc banner' />
                            </Link>
                        </div>
                        <div className='img-1 img-collection'>
                            <Link to='/'>

                                <img src={require('../assets/vooc-charger.jpg')} alt='desc banner' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
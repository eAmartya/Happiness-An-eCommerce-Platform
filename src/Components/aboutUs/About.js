import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './about.css'

function About() {
    document.title = "About Us- Happiness"
    return (
        <>
            <Navbar />
            <section className='aboutus-main'>
                <div className='img-box'>
                    {/* <img src={require('../assets/about-banner.jpg')} alt='about-uss banner' /> */}
                </div>
                <div className='history'>
                    <div className='marg history-content dflex'>
                        <div className='years20'>
                            <img src={require('../assets/20-years.png')} alt='20years of experience' />
                        </div>
                        <div className='history-text'>
                            <h2 className='history-title'>
                                History
                            </h2>
                            <h3 className='storyline'>The story of mobile accessories begins with a simple idea to create a perfect world for every person around us, who want to update their look and stay updated.</h3>
                            <span className='breifStory'>Replug is the go-to brand for high quality and reliable audio accessories, headphones and mobile accessories. Our products are designed for maximum sound quality and durability. Replug company is working from last 20 years. we have a good experience to build best quality products to you.</span>
                        </div>
                    </div>
                    <div className='marg quality dflex'>
                        <div className='quality-text'>
                            <h2>Quality Assured</h2>
                            <p className='quality-about'>
                                <strong>Quality assured</strong> before they leave our production facilities, replug innotech products are performance tested , at fully loaded capacity , using our stringent quality control standards. we put them through tests more rigorous then you can imagine. this attention to quality and performance is what has make replug innotech world class.
                            </p>
                            <p className='quality-about'>
                                We manufacture our products in a highly controlled production environment, ensuring that the replug products we deliver are of the highest possible quality. Our rigorous quality control ensures every product that leaves our facilities is tested at full load capacity and passes through a series of tests which exceed international standards.
                            </p>
                        </div>
                        <div className='quality-image'>
                            <img src={require('../assets/production-banner.png')} alt='Prod' />
                        </div>
                    </div>
                </div>
                <div className='keyFeatures dflex'>
                    <div className='title-feature'>
                        <h2 className='title-feature-h2'>Our Key <span className='color-chnage'>Features</span></h2>
                        <p className='tittle-desc'>
                            When Replug InnoTech products go from our production facilities to your
                            home, you’re trusting in our quality assurance procedures.
                        </p>
                    </div>
                    <div className='feature-content'>
                        <div className='feature-title-img'>
                            <div className='img-feature-box'>
                                <img src={require('../assets/features.png')} alt='features' />
                            </div>
                        </div>
                        <div className='features-list'>
                            <div className='premimumAudio feature-card'>
                                <div className='premimum-img-box feature-img-box'>
                                    <img className='img-premimum' src={require('../assets/quality-audio.png')} alt='premimum' />
                                </div>
                                <div className='premimum-text feature-img-text'>
                                    <h2 className='premimum-text-title feature-text-title'>
                                        Premium Audio Quality
                                    </h2>
                                    <p className='premimum-desc feature-text-desc'>
                                        Our audio products refer to a high level of sound fidelity that provides a more immersive and engaging listening experience
                                    </p>
                                </div>
                            </div>
                            <div className='durable feature-card'>
                                <div className='durable-img-box feature-img-box'>
                                    <img className='img-durable' src={require('../assets/durable.png')} alt='durable' />
                                </div>
                                <div className='durable-text feature-img-text'>
                                    <h2 className='durable-text-title feature-text-title'>
                                        Durability

                                    </h2>
                                    <p className='durable-desc feature-text-desc'>
                                        Our audio products refer to a high level of sound fidelity that provides a more immersive and engaging listening experience.
                                    </p>
                                </div>
                            </div>
                            <div className='compatibility feature-card'>
                                <div className='compatibility-img-box feature-img-box'>
                                    <img className='img-compatibility' src={require('../assets/Multidevice-conn.png')} alt='durable' />
                                </div>
                                <div className='compatibility-text feature-img-text '>
                                    <h2 className='compatibility-text-title feature-text-title'>


                                        Multi Device Compatibility


                                    </h2>
                                    <p className='compatibility-desc feature-text-desc'>

                                        Our audio products refer to a high level of sound fidelity that provides a more immersive and engaging listening experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='founder-box dflex'>
                    <div className='founder-box-main'>

                        <div className='founder-box-div'>
                            <img src={require('../assets/team-1.png')} alt='team pic' />
                        </div>
                        <div className='founder-info'>
                            <h2 className='name'>Maheep Gupta</h2>
                            <h2>Developer of <span className='color-chnage'>Happiness</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About
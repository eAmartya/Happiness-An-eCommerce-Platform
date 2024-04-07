import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };
    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000} // Adjust the interval time (in milliseconds) for automatic slide change
                selectedItem={currentSlide}
                showArrows={false}
            >
                <div>
                    <img src={require('../dummycarousel.png')} alt='carousel' />

                </div>
                <div>
                    <img src={require('../dummycarousel.png')} alt='carousel' />


                </div>
                <div>
                    <img src={require('../dummycarousel.png')} alt='carousel' />


                </div>
            </Carousel>
            <div className='carousel-btn carousel-controls'>
                <div className='prev btn' onClick={handlePrevSlide}><i className="fa-solid fa-angle-left"></i></div>
                <div className='next btn' onClick={handleNextSlide}><i className="fa-solid fa-angle-right"></i></div>
            </div>
        </>

    )
}

export default HomeCarousel
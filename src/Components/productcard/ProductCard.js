import React from 'react'
import './productCard.css'

function ProductCard(props) {
    return (
        <>
            <div className='product-main'>
                <div className='card-body'>
                    <div className='product-image'>
                        <img src={require(`../assets/${props.productDetails.productImage}`)} alt='productcard' />
                    </div>
                    <div className='card-title'>
                        <div className='pricetag'>
                            <h2 className='productName'>{props.productDetails.productName}</h2>
                            <p className={`originalPrice ${props.productDetails.discountedPrice !== 0 ? 'underline' : null}`}><i className="fa-solid fa-indian-rupee-sign"></i>{props.productDetails.originalPrice}</p>
                            {props.productDetails.discountedPrice !== 0 ? <p className='discountedPrice'><i className="fa-solid fa-indian-rupee-sign"></i>{props.productDetails.discountedPrice}</p> : null}
                        </div>
                        <div className='buttons'>
                            <button className='buyNow'>Buy Now</button>
                        </div>

                    </div>
                    <div className='card-footer'>
                        {/* Stars Rating System */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCard
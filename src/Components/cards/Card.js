import React from 'react'

function Card(props) {
  return (
      <>
          <div className='card'>
              <div className='card-left'>
                  <div className='discount-per'></div>
                  <div className='productName'></div>
                  <div className='discount-code'></div>
                  {/* <div className='buyNow btn'></div> */}
              </div>
              <div className='card-right'></div>
          </div>
      </>
  )
}

export default Card
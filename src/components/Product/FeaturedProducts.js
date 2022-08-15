import React from "react"
import Products from './Products'
import "./style.css"

const FeaturedProducts = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Featured Products</h1>
          </div>
          <Products productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts

import React from "react"
import Home from "../components/MainPage/Home"
import FeaturedProducts from "../components/Product/FeaturedProducts"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FeaturedProducts  productItems={productItems} addToCart={addToCart} />
    </>
  )
}

export default Pages

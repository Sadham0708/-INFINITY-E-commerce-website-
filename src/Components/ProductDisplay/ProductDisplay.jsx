import React, {useContext}from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/stardull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


 const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img className='productdisplay-left-sideimage' src={product.image} alt="" />
                <img className='productdisplay-left-sideimage' src={product.image} alt="" />
                <img className='productdisplay-left-sideimage' src={product.image} alt="" />
                <img className='productdisplay-left-sideimage' src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>

        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={stardull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>

            </div>
            <div className="productdisplay-right-description">
            Discover the perfect blend of style, comfort, and quality with our carefully crafted collection. Designed to suit every occasion, our products are made to provide a flawless fit and unmatched ease for your everyday needs.            </div>    
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button type='button' onClick={(e) => {
                e.preventDefault()
                addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>Woman , T-shirt , Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>

        </div>

    </div>
  )
}
export default ProductDisplay
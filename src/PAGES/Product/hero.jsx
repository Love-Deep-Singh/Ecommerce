import React from 'react'
import "./style.css"
import productimg from "../../assets/Left-column-product.png"
import "../../index.css"
import SimpleImageSlider from "react-simple-image-slider";
function Hero() {
  return (
    <>
    <div className="flex">
        <div className="img-col">
            <img src={productimg} alt="Prodiuct image" id="product-img" />
        </div>
        <div className="text-col">
            <h1 className='heading-hero'>Lorem ipsum dolor <span>/sit amet.</span></h1>
            <h1 className='subheading-hero'>Lorem, ipsum.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi at praesentium eaque labore ex expedita totam quod debitis, similique fugiat, ea consequuntur?</p>
            <div className='quantity'><span>Quantity</span>
            <div  className='button-grp' aria-label="medium secondary button group">
              <buttton className="button-qty">-</buttton>
              <buttton className="button-qty">1</buttton>
              <buttton className="button-qty">+</buttton>
                
             </div>
            <div>

            
                    
            <div className='recomendations'>
                <h2 clas>Excellent with:</h2>
                <div>
                 
                </div>
            </div>
            <div></div>
            <button className='black-button'>Add to cart</button>
        </div>
       </div>
    </div>
    </div>
    </>
  )
}

export default Hero
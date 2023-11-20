import React from 'react'
import product1 from "../../assets/product-1.png"
import product2 from "../../assets/product-2.png"
import product3 from "../../assets/product-3.png"
import product4 from "../../assets/product-4.png"


function recom() {
  return (
    <>
    <div className="rec-flex">
        <div className="rec-items"><img src={product1} alt="" /></div>
        <div className="rec-items"><img src={product2} alt="" /></div>
        <div className="rec-items"><img src={product3} alt="" /></div>
        <div className="rec-items"><img src={product4} alt="" /></div>
    </div>
    </>
  )
}

export default recom
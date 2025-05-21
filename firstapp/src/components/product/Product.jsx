import React from 'react'
import "./Product.css"

function Product({products}) {
  return (
    <div className="card">
                            <img src={products.image} alt="" height={200} width={250} />
                             <h4>{products.title}</h4>
                             <p>${products.price}</p>
                             <button style={{margin:"20px"}}>Product Details</button>
                              <button>Add To Cart</button>
                        </div>
  )
}

export default Product

import React from 'react'
import { Product } from "../index"
import "./Products.scss"

function Products({ products, innerPage, headingText }) {

  return (
    <>
      <div className="products-container">
        {!innerPage && <div className="sec-heading">
          {headingText}
        </div>}
        <div className="products">
          {products?.data.map((item) => {
            return <Product key={item.id} id={item.id} data={item.attributes}/>;
          })}
        </div>
      </div>
    </>
  )
}

export default Products
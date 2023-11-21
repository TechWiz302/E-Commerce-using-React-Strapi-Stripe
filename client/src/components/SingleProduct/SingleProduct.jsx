import React, { useEffect, useState, useContext } from 'react'
import { RelatedProducts } from "../index"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from 'react-icons/fa';
import prod from "../../assets/products/earbuds-prod-1.webp"
import "./SingleProduct.scss";
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Context } from '../../utils/context';



function SingleProduct() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useContext(Context)

  if (!data) return;

  const product = data.data[0].attributes

  return (
    <>
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={ product.img.data?.[0].attributes.url} alt="prod" />
            </div>
            <div className="right">
              <span className="name">{product.title}</span>
              <span className="price">&#8377; {product.price}</span>
              <span className="desc">{product.desc}</span>

              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={() => setQuantity((prevState) => prevState === 1 ? 1 : (prevState - 1))}>-</span>
                  <span>{quantity}</span>
                  <span onClick={() => setQuantity((prevState) => prevState + 1)}>+</span>
                </div>
                <button className='add-to-cart-button' type="button" onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}>
                  <FaCartPlus size={20} /> ADD TO Cart
                </button>
              </div>

              <span className='divider' />

              <div className="info-item">
                <span className="text-bold">
                  Category:
                  <span> {product.categories.data[0].attributes.title}</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className='social-icons'>
                    <FaFacebookF size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedinIn size={16} />
                    <FaTwitter size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>

            </div>
          </div>
          <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
        </div>
      </div>
    </>
  )
}

export default SingleProduct
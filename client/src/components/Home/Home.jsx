import React, { useEffect, useContext } from 'react'
import "./Home.scss";
import { fetchDataFromApi } from '../../utils/api';
import { Banner, Category, Products } from "../index"
import { Context } from '../../utils/context';


function Home() {

  const { categories, setCategories, products, setProducts} = useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts(); 
  }, []);

  const getCategories = async () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res)
      setCategories(res);
    }
    )
  }

  const getProducts = async () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    }
    )
  }

  return (
    <>
      <div>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category categories={categories}/>
            <Products products={products} headingText="Popular Products" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
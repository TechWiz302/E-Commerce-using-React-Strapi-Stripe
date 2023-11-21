import React, {useEffect} from 'react'
import { Products } from "../index"
import "./Categories.scss"
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Categories() {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  const {id} = useParams();

  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);


  return (
    <>
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">{data?.data?.[0].attributes?.categories?.data?.[0]?.attributes?.title}</div>
          <Products products={data} innerPage = {true}/>
        </div>
      </div>
    </>
  )
}

export default Categories
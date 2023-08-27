import React, { useState, useEffect, useContext } from "react";
import "./ProductPage.css";
import { Link, useSearchParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../../contexts/ProductContext/types";

const ProuctPage = () => {
  const { getProducts, products } = useContext(
    productContext
  ) as IProductContextTypes;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <div className="container">
      {products?.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" className="image" />
          <Link to={`/edit/${item.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default ProuctPage;

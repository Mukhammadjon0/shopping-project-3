import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Products from "../Products/Products";
import "./Home.css";

function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <div className="home-page">
        <h1>Products</h1>
      <div className="products">
        {product.map((product) => (
          <Products key={product.id} product={product} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;

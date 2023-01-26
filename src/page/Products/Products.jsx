import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/productSlice";
import "./Products.css";
function Products({ id, title, price, image, product}) {
  const [son, setSon]=useState(1)

  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket.basket);

  const addToBasketBtn = () => {
    const check = basket.some((item) => item.id === id);
    if (check) alert("bu maxsulot qoshilgan");
    else dispatch(addToBasket(product));
  };

  const minusBtn=()=>{
    if(son>1)setSon(p=>p-1)
    else setSon(1)
  }
  return (
    <div className="product">
      <h2>{id}</h2>
      <img src={image} alt="product" />
      <h3>{title}</h3>
      <h2>Price: {price}$</h2>
      <div className="card-buttons">
        <button onClick={addToBasketBtn}>Add to Favorite</button>
        <div className="add-remove-btn">
          <button onClick={minusBtn} className="add-btn">-</button>
          <p>{son}</p>
          <button onClick={()=>setSon(p=>p+1)} className="remove-btn">+</button>
        </div>
      </div>
    </div>
  );
}

export default Products;

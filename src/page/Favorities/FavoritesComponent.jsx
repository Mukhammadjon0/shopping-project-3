import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProd } from "../../redux/productSlice";
import './FavoritesComponent.css'
function FavoritesComponent({ id, title, price, image }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const navigate = useNavigate();
  const deleteProdBtn = () => {
    dispatch(deleteProd(id));
    if (basket.length === 1) navigate("/");
  };
  return (
    <div className="basket-products">
      <h1>{id}</h1>
      <img src={image} alt="product" />
      <h3>{title}</h3>
      <h2>{price}</h2>
      <button onClick={deleteProdBtn}>Delete</button>
    </div>
  );
}

export default FavoritesComponent;

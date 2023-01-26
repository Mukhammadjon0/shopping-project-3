import React from "react";
import { useSelector } from "react-redux";
import "./Favorites.css";
import FavoritesComponent from "./FavoritesComponent";
function Favorites() {
  const basket = useSelector((state) => state.basket.basket);
  const prices = basket.map((item) => item.price).reduce((a, b) => a + b) || [];
  return (
    <div>
      <div className="basket-cards">
        {basket.length > 0 ? (
          basket.map((product) => (
            <FavoritesComponent key={product.id} {...product} />
          ))
        ) : (
          <h3>Mahsulot tanlanmagan!</h3>
        )}
      </div>
      <h1 className="jami-text">Jami: {prices}$</h1>
    </div>
  );
}

export default Favorites;

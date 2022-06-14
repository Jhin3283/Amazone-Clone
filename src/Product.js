import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">
            <small>$</small>
            <strong>30</strong>
          </p>
          <div className="product__rating">⭐️⭐️⭐️⭐️⭐️</div>
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          alt="product__image"
        />
        <button>Add To Basket</button>
      </div>
    </div>
  );
}

export default Product;

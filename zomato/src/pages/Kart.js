import React from "react";
import "./Kart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../store/cartslice/Cartslice";
import nan from "../images/nan.webp";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { PiShoppingCartThin } from "react-icons/pi";

const Kart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({id, quantity: quantity + 1}));
  };

  const decrementCart = (id,quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id,quantity: quantity-1 }));
    }
  };

  return (
    <div>
      <section className="cart-header">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">
              <Link to="/">
                <img src={nan} className="zzomo" alt="" />
              </Link>
            </a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>  
        </nav>
      </section>
      <div className="linee">
      <PiShoppingCartThin className="cart-icon"/><h4>Your cart</h4>
      </div>
      {cartProducts.map((item) => (
        <div class="card mb-3 container cart-second" key={item._id}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={item.image} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">
                  <b>{item.title}</b>
                  <br />
                  {item.ds}
                  <br />
                  {item.price}
                </p>
                <button className="btn btn-primary bt1">
                <button onClick={() =>decrementCart(item._id,item.quantity) } className="btn btn-warning bt2">-</button>
                <h4 className="mt-2 text-center">
                  {item.quantity}
                </h4>
                <button className="btn btn-warning bt3" onClick={() =>  incrementCart(item._id,item.quantity)}>+</button>
                </button>
                <button onClick={() => deleteCart(item)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kart;

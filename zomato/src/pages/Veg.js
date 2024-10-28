import React, { useEffect, useState } from "react";
import "./Veg.css";
import nan from "../images/nan.webp";
import { Link } from "react-router-dom";
import Idli from "../images/Idli.avif";
import dosa from "../images/dosa.avif";
import pongal from "../images/pongal.avif";
import vada from "../images/vada.avif";
import biriyani from "../images/biriyani.avif";
import tiffin from "../images/tiffin.avif";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cartslice/Cartslice";


const Veg = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
    // addItem();
  };
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    // removeItem();
  };  
  const [productsVeg ,setProductsVeg] = useState([]);
  useEffect(() =>{
    fetch("http://localhost:5500/allproduct")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setProductsVeg(data);
      }
    });
  });

  return (
    <div>
      <section class="navbar-first header">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to="/">
              <img src={nan} alt="" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse top-search"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search for restaurant, cuisine or a dish"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 right-menu">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Sign up
                  </a>
                </li>
                 <li class="nav-item cartt">
                  <Link class="nav-link ln" to="/cart">
                  <HiOutlineShoppingCart  /> Cart 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <br />
        </nav>
        <p>Home / India / Coimbatore / RS Puram, Coimbatore Restaurants</p>
      </section>

      <section className="inspiration">
        <h2>Inspiration for your first order</h2>
        <div className="order">
          <img src={Idli}></img>
          <img src={dosa}></img>
          <img src={pongal}></img>
          <img src={vada}></img>
          <img src={biriyani}></img>
          <img className="tiffin" src={tiffin}></img>
        </div>
        <div className="foodname">
          <ul>
            <li>Idli</li>
            <li>Dosa</li>
            <li>Pongal</li>
            <li>Vada</li>
            <li>Biriyani</li>
            <li>Tiffin</li>
          </ul>
        </div>
      </section> 

      <section className="container veg-menu">
        <h2>Order food online in RS Puram, Coimbatore</h2>
        <div className="container">
          <div className="r1">
            <div className="row">
              {productsVeg.map((item)=>( 
              <div className="col-lg-4 foods">
                <div class="card" key={item._id}>
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>{item.title}</b>
                      <br />
                      {item.ds}<br/>
                      {item.price}
                    </p>
                    {cartProducts.find(
                      (items) => items._id === item._id
                    ) ? (
                      <button
                      class="btn btn-warning"
                      onClick={() => {
                        deleteCart(item);
                      }}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                      className="btn btn-primary"
                      onClick={() => {
                        addCart(item);
                      }}
                      >
                        AddToCart
                      </button>
                    )}
                    {/* <a href="#" class="btn btn-primary">Add to cart</a> */}
                  </div>
                </div>
              </div>))}
              {/* <div className="col-lg-4">
                <div class="card">
                  <img src={v2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={v3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="r1">
            <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  <img src={v4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Sree Annapoorna</b>
                      <br />
                      South Indian, North Indian, Chinese, Beverages <br /> RS
                      Puram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={v5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={v6} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="r1">
            <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  <img src={v7} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Sree Annapoorna</b>
                      <br />
                      South Indian, North Indian, Chinese, Beverages <br /> RS
                      Puram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={v8} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={v9} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="r1">
            <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  <img src={v10} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Sree Annapoorna</b>
                      <br />
                      South Indian, North Indian, Chinese, Beverages <br /> RS
                      Puram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={v11} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={v12} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>Geetha Canteen</b>
                      <br />
                      South Indian, Chinese <br /> Gandhipuram, Coimbatore
                    </p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Veg;

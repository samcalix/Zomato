import React, { useEffect, useState } from "react";
import "./Vedit.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Vedit = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    image:"",
    title:"",
    ds:"",
    price:"",
  });
  useEffect(() => {
    fetch(`http://localhost:5500/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const ds = form.ds.value;
    const price = form.price.value;
    const quantity = 1;

    const productObj = {
      image,
      title,
      ds,
      price,
      quantity
    };
    console.log(productObj);
    fetch(`http://localhost:5500/product/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(productObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Updated succesfully");
        window.location.href = "/vdate";
      });
  };
  return (
    <div>
      <div className="vegie">
        <form onSubmit={ handleUpdate } >
          <h1>Edit product details</h1>
          <label value="image">Image</label>
          <br />
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={productData.image}
          />
          <br />
          <label value="title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={productData.title}
          ></input>
          <br />
          <label value="ds">Description</label>
          <br />
          <input type="text" id="ds" name="ds" defaultValue={productData.ds}></input>
          <br />
          <label value="price">Price</label>
          <br />
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={productData.price}
          ></input>
          <br />
          <button type="submit" class="btn btn-success upload">
            EDIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Vedit;

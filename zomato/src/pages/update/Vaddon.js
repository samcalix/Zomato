import React from "react";
import { toast } from "react-toastify";
import "./Vaddon.css";

const Vaddon = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const ds = form.ds.value;
    const price = form.price.value;
    const quantity = 1;

    if (image === "" || title === "" || ds === "" || price === "") {
      toast.warn("fill all the fields");
    }
    const foodObj = {
      image,
      title,
      ds,
      price,
      quantity,
    }; 
    console.log(foodObj);

    fetch("http://localhost:5500/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(foodObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Added Succesflly");
        form.reset();
        window.location.href = "/vdate";
      });
  };
  return (
    <div>
      <div className="vegie">
        <form onSubmit={handleSubmit}>
          <h1>Upload product</h1>
          <label value="image">Image</label>
          <br />
          <input type="text" id="image" name="image"></input>
          <br />
          <label value="title">Title</label>
          <br />
          <input type="text" name="title" id="title"></input>
          <br />
          <label value="ds">Description</label>
          <br />
          <input type="text" name="ds" id="ds"></input>
          <br />
          <label value="price">Price</label>
          <br />
          <input type="text" name="price" id="price"></input>
          <br />
          <button type="submit" class="btn btn-success upload">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Vaddon;

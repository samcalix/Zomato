import React, { useEffect, useState } from "react";
import "./Vupdate.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Vupdate = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/allproduct`)
      .then((res) => res.json())
      .then((data) => setProductItems(data));
  }, []);
  const deleteProduct = (id) => {
    fetch(`http://localhost:5500/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product successfully Deleted !");
        setProductItems((prevProductItems) =>
          prevProductItems.filter((item) => item._id !== id)
        );
      });
  };
  return (
    <div>
      <Link to="/vaddon">
        <button type="button" class="btn btn-success addon">
          Addon
        </button>
      </Link>
      <h2 className="updated">Updated products</h2>
      <div>
        {productItems.map((item) => (
          <div class="card mb-3 addcard" key={item._id}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={item.image}
                  className="img-fluid rounded-start uimg"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.ds}</p>
                  <p class="card-text">{item.price}</p>
                  <Link to={`/edit/${item._id}`}>
                    <button className="btn btn-primary ebutton">Edit</button>
                  </Link>
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Vupdate;

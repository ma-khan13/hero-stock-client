import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firbase/firbase.init";

const AddStock = () => {
  const [user] = useAuthState(auth);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageUrlRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const supplierRef = useRef();
  let handleAddStock = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let imageUrl = imageUrlRef.current.value;
    let price = priceRef.current.value;
    let quantity = quantityRef.current.value;
    let supplier = supplierRef.current.value;
    let email = user?.email;
    let itemDetails = {
      title,
      description,
      imageUrl,
      price,
      quantity,
      supplier,
      email,
    };
    const url = "http://localhost:5000/add-stock-item";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
  };
  return (
    <div className="container mt-4">
      <form className="row " onSubmit={handleAddStock}>
        <div
          className="col-md-8 mx-auto bg-light p-5"
          style={{ borderRadius: "7px" }}
        >
          <h3 className="text-uppercase mb-3">Add New Stock Item</h3>
          <div className="row g-3">
            <div className="col-md-12">
              <label className="form-label">Product Title</label>
              <input
                type="text"
                ref={titleRef}
                className="form-control"
                id="title"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Supplier Name</label>
              <input
                type="text"
                ref={supplierRef}
                className="form-control"
                id="supplier"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Pirce</label>
              <input
                type="number"
                ref={priceRef}
                className="form-control"
                id="price"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                ref={quantityRef}
                className="form-control"
                id="quantity"
                required
              />
            </div>
            <div className="col-md-9">
              <label className="form-label">Image Url</label>
              <input
                type="text"
                ref={imageUrlRef}
                className="form-control"
                id="image"
                required
              />
            </div>
            <div className="col-lg-12">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                ref={descriptionRef}
                id=""
                cols="80"
                rows="10"
                              required
                              style={{ maxWidth: '100%' }}
              ></textarea>
            </div>
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-warning px-5">
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStock;

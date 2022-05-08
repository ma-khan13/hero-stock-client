import React, { useEffect, useRef, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const axios = require("axios").default;

const ManageStock = () => {
  const stockId = useParams();
  const [manageStockItem, setManageStockItem] = useState({})
  const quantityRef = useRef()
  const { _id , title, imageUrl, description, price, quantity, supplier } =
    manageStockItem;
 
    useEffect(() => {
      const url = `https://pacific-garden-84350.herokuapp.com/stock-item/${stockId.id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setManageStockItem(data));
    }, [stockId.id, quantity]);
  

      let lowStock;
      let stockOut;
      if (quantity <= 5 || quantity === 0) {
        lowStock = ` ${quantity} Low`;
        stockOut = " Stock Out";
  }
  

  let handleQuantityUpdate = (newQuantity) => {
    const url = `https://pacific-garden-84350.herokuapp.com/quantity-update/${stockId.id}`;
    axios
      .put(url, { quantity: newQuantity})
      .then(function (response) {
        setManageStockItem(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleQuantity = (e) => {
    e.preventDefault();
    const quantityInput = parseInt(quantityRef.current.value);
    const newQuantity = quantityInput + parseInt(quantity);
    handleQuantityUpdate(newQuantity)
    e.target.reset();
  }
  let decrementalQuantity = quantity;
  const handleDelivered = (e) => {
    e.preventDefault();
    if (parseInt(quantity) > 0) {
      handleQuantityUpdate(decrementalQuantity - 1);
    } else {
      toast.warning('Stock Out')
    }
  };
    return (
      <Container className="my-5">
        <form className="row mb-3" onSubmit={handleQuantity}>
          <div
            className="col-md-12 mx-auto bg-light py-3"
            style={{ borderRadius: "7px" }}
          >
            <h3 className="text-uppercase mb-3 text-center">
              Manage Stock Item
            </h3>
            <div className="row ">
              <div className="col-md-8 mx-auto d-flex justify-content-center">
                <div className="row g-3 align-items-center ">
                  <div className="col-sm-6">
                    <input
                      type="number"
                      ref={quantityRef}
                      className="form-control"
                      id="quantity"
                      placeholder="Quantity"
                      required
                    />
                  </div>
                  <div className="col-sm-6 text-center">
                    <button
                      type="submit"
                      onSubmit={handleQuantity}
                      className="btn btn-warning px-5"
                    >
                      Increase Stock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Col md={12} lg={12}>
          <div className="mx-auto card mb-3">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="img-fluid px-2"
                  src={imageUrl}
                  alt=""
                  style={{ height: "336px", objectFit: "cover" }}
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body ">
                  <h3 className="card-title">{title}</h3>
                  <small className="card-text">Porduct_Id: {_id}</small>
                  <p className="card-text">{description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-0">
                        Price: <strong>{price}</strong>
                      </p>
                      <p className="text-muted mb-0">
                        Stock:
                        <strong className={`${quantity ? " " : "text-danger"}`}>
                          {quantity ? (
                            lowStock ? (
                              <span className="text-warning">{lowStock}</span>
                            ) : (
                              " " + quantity
                            )
                          ) : (
                            stockOut
                          )}
                        </strong>
                      </p>
                      <p className="text-muted mb-0">
                        Supplier:
                        <strong>
                          <em> {supplier}</em>
                        </strong>
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={handleDelivered}
                        className="btn btn-warning"
                      >
                        Delivered
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Container>
    );
};

export default ManageStock;
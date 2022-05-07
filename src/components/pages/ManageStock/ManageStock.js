import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ManageStock = () => {
  const stockId = useParams();
  const [manageStockItem, setManageStockItem] = useState({})
  const { name, imageUrl, description, price, quantity, supplier } =
    manageStockItem;
  useEffect(() => {
    const url = `http://localhost:5000/stock-item/${stockId.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageStockItem(data));
  }, [stockId.id]);
      let lowStock;
      let stockOut;
      if (quantity <= 5 || quantity === 0) {
        lowStock = ` ${quantity} Low`;
        stockOut = " Stock Out";
      }
    return (
      <Container className="my-5">
        <Col md={12} lg={12}>
          <div className="mx-auto card mb-3">
            <div className="row g-0">
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
                  <h5 className="card-title">{name}</h5>
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
                      <button className="btn btn-warning">Manage Stock</button>
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
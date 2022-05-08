import React from 'react';
import { Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StockItem = ({ stockItem }) => {
  const navigate = useNavigate();
    let {_id, name, imageUrl, price, description, quantity, supplier } = stockItem;
    let lowStock;
    let stockOut;
    if (quantity <= 5 || quantity === 0) {
        lowStock = ` ${ quantity} Low`;
        stockOut = " Stock Out";
  }
  const navigateToManageStock = id => {
    navigate(`/manage/${_id}`);
  }
    return (
          <Col md={12} lg={12}>
            <div className="mx-auto card mb-3">
              <div className="row g-0">
                <div className="col-sm-4 col-lg-3">
                  <img
                    className="img-fluid px-2"
                    src={imageUrl}
                    alt=""
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-sm-8 col-lg-9">
                  <div className="card-body">
                    <h3 className="card-title">
                      <strong>{name}</strong>
                    </h3>
                    <p className="card-text">
                      {description.length >= 250
                        ? description.slice(0, 250) + "....."
                        : description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="text-muted mb-0">
                          Price: <strong>{price}</strong>
                        </p>
                        <p className="text-muted mb-0">
                          Stock:
                          <strong
                            className={`${quantity ? " " : "text-danger"}`}
                          >
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
                          onClick={() => navigateToManageStock(_id)}
                          className="btn btn-warning"
                        >
                          Manage Stock
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
    );
};

export default StockItem;
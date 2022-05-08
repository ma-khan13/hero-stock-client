import React from 'react';
import warehouse from '../../../images/ware-house-retail.png'

const WareHouseMahage = () => {
    return (
      <div className="container bg-light pb-5">
        <h1 className="text-center py-3">Warehouse Management</h1>
        <div className="row g-2">
          <div className="col-lg-4">
            <img className="img-fluid" src={warehouse} alt="" />
          </div>
          <div className="col-lg-8 card">
            <ul className = "list-group list-group-flush">
              <li className = "list-group-item">
                Supports multiple warehouse for a retail store based on the
                location and convenience (from where replenishment will be done
                for the respective outlets
              </li>
              <li className = "list-group-item">
                Track inventory movement completely which includes indent
                request from outlets, receipt of the indents at warehouse, stock
                dispatch against the indent from warehouse, stock receipt at
                outlets, etc.
              </li>
              <li className = "list-group-item">
                Monitor stock in transit which is the quantity shipped from one
                outlet/warehouse to another outlet/warehouse but has not yet
                been received by the respective receiving entity
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default WareHouseMahage;
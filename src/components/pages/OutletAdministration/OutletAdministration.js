import React from 'react';
import Outlet from "../../../images/store-management-retail.png";
const OutletAdministration = () => {
   return (
     <div className="container mt-5">
       <div className="row">
         <div class="card" style={{ height: "500px" }}>
           <img
             src={Outlet}
             class="card-img img-fluid"
             alt=""
             style={{ height: "100%" }}
           />
           <div class="card-img-overlay col-8">
             <h2 class="card-title">Outlet Administration</h2>
             <p class="card-text">
               Configure business process and transaction centrally to suit your
               business needs such as control on item scanned, item discounts,
               bill discounts, price levels, rate selection, stock selection,
               salesman selection at the time of bill, customer details
               selection, etc
             </p>
             <p class="card-text">
               Freedom to franchisee outlets to operate by implementing
               centralized configuration for select stores, group of stores or
               in all stores based on business needs
             </p>
             <p class="card-text">
               Add tender types and configure the way the tender has to be
               accounted and processed at the POS from the central location
             </p>
             <p class="card-text">
               Manage hierarchical security settings based on roles and policies
               defined for employees
             </p>
             <p class="card-text">
               Centralized masters and admin control gives you power to open a
               new store within a matter of 30 minutes
             </p>
           </div>
         </div>
       </div>
     </div>
   );
};

export default OutletAdministration;
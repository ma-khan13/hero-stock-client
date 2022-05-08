import React from 'react';
import ManageInvantory from '../ManageInvantory/ManageInvantory';

const ManageInvantoris = () => {
        const url = `http://localhost:5000/stock-items`;
  return (
    <div className="container my-4">
      <ManageInvantory
        url={url}
        tableTitle={"Manage Inventory"}
      ></ManageInvantory>
    </div>
  );
};

export default ManageInvantoris;
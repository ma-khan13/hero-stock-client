import React from 'react';
import ManageInvantory from '../ManageInvantory/ManageInvantory';

const ManageInvantoris = () => {
        const url = `https://pacific-garden-84350.herokuapp.com/stock-items`;
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
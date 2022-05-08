import React from 'react';
import DataTable from 'react-data-table-component';

const ManageInvantory = ({ columns, data }) => {
  return (
    <div className="bg-light py-3 px-2" style={{ borderRadius: "7px" }}>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ManageInvantory;
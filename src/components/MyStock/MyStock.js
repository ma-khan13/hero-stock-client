import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from '../../firbase/firbase.init';
import ManageInvantory from '../ManageInvantory/ManageInvantory';

const MyStock = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    let email = user?.email;
    const url = `http://localhost:5000/my-stock/${email}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyItems(data));
    }, [url]);
  
  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Are you sure want to delete?'`
    );
    if (proceed) {
      const url = `http://localhost:5000/stock-item-delete/${id}`;
      fetch(url, {
        method:'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const filterItem = myItems.filter((myItem) => myItem._id !== id);
            setMyItems(filterItem);
          }
          console.log(data);
      })
    }
  }
  
  
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img src={row.imageUrl} width={100} height={100} alt="" />
      ),
    },
    {
      name: "Proudacot Name",
      selector: (row) => row.title,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Price",
      selector: (row) => row.price + " Tk",
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Supplier",
      selector: (row) => row.supplier,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Link
            to={`/manage/${row._id}`}
            className="btn btn-warning"
            style={{ width: "300px", marginRight: "5px" }}
          >
            Manage
          </Link>
          <button
            onClick={() => handleDelete(row._id)}
            className="btn btn-warning"
            style={{ width: "300px" }}
          >
            Delete
          </button>
        </>
      ),
    },
  ];
  
    return (
      <div className="container">
        <h1 className="text-white">My Stock items</h1>
        <ManageInvantory columns={columns} data={myItems}></ManageInvantory>
      </div>
    );
};

export default MyStock;
import React from 'react';
import ManageInvantory from '../ManageInvantory/ManageInvantory';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firbase/firbase.init';
const MyStock = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const url = `http://localhost:5000/my-stock/${email}`;
  return (
    <div className="container my-4">
      <ManageInvantory
        url={url}
        tableTitle={"My Stock items"}
      ></ManageInvantory>
    </div>
  );
};

export default MyStock;

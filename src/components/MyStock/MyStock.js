import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firbase/firbase.init';

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
    return (
      <div>
        <h1 className="text-white">My Stock items</h1>

        {myItems.map((myItem) => (
            <h1 className="text-white">{myItem.title}</h1>
        ))}
      </div>
    );
};

export default MyStock;
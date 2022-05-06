import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StockItem from '../StockItem/StockItem'
const StockItems = () => {

    let [stockItems, setStockItems] = useState([]);
    useEffect(() => {
        fetch('stock_item.json')
            .then(res => res.json())
            .then(data => setStockItems(data))
    },[])
    return (
      <div>
        <Container className="py-5">
          <h2 className="text-white text-center mb-5 text-uppercase">
            Stock Items
          </h2>
          <Row>
            {stockItems.slice(0, 6).map((stockItem) => (
              <StockItem key={stockItem._id} stockItem={stockItem}></StockItem>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default StockItems;
import React from 'react';
import Banner from '../pages/Banner/Banner';
import OutletAdministration from '../pages/OutletAdministration/OutletAdministration';
import StockItems from '../pages/StockItems/StockItems';
import WareHouseMahage from '../pages/WareHouseMahage/WareHouseMahage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StockItems></StockItems>
            <WareHouseMahage></WareHouseMahage>
            <OutletAdministration></OutletAdministration>
        </div>
    );
};

export default Home;
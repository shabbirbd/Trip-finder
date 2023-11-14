import React from 'react';
import Explore from '../components/Explore';
import ListingHeader from '../components/ListingHeader';
import Newsletter from '../components/Newsletter';
import ListingDetail from '../components/listingDetail/ListingDetail';

const Listings = () => {
    return (
        <>
            <ListingHeader/>
            <ListingDetail/>
            <Explore/>
            <Newsletter/>
        </>
    );
};

export default Listings;
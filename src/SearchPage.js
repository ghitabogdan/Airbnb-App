import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 26 august 2020 - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
            img="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
            <SearchResult 
            img="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
            <SearchResult 
            img="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
        </div>
    )
}

export default SearchPage

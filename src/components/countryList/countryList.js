import React from 'react';
import ListGroup from "reactstrap/es/ListGroup";
import CountyListItem from "./countyListItem/countyListItem";

const CountryList = (
    {counties, request}
) => {
    return (
        <ListGroup style={{maxHeight: 'calc(100vh - 1px)'}} className='w-25 overflow-auto'>
            {counties.map(country => {
                return (
                    <CountyListItem
                        onClick={() => request(country.alpha3Code)}
                        key={country.name}
                        country={country.name}
                    />
                )
            })}
        </ListGroup>
    );
};

export default CountryList;
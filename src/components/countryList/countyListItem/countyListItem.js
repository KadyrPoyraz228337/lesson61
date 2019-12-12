import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const CountyListItem = (
    {country, onClick}
) => {
    return (
        <>
            <ListGroupItem style={{cursor: 'pointer'}} className='list-group-item-action' title={country} onClick={onClick}>
                {country}
            </ListGroupItem>
        </>
    );
};

export default CountyListItem;
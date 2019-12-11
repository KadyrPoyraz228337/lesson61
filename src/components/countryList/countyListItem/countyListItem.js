import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const CountyListItem = (
    {country}
) => {
    return (
        <>
            <ListGroupItem style={{cursor: 'pointer'}} className='list-group-item-action'>
                {country}
            </ListGroupItem>
        </>
    );
};

export default CountyListItem;
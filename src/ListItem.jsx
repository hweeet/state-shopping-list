import React from "react";
import Item from "./Item";
import App from "./App";

const ListItem = ({ handleCheck, handleDelete, items }) => {
    return (
        <ul>
            {items.map((item) => (
                <Item handleCheck={handleCheck}
                      handleDelete={handleDelete}
                      item={item} 
                      key={item.id}/>
            ))}
        </ul>
    )
}

export default ListItem;


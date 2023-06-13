import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({handleSubmit, newItem, setNewItem}) => {
    const inputRef = useRef();

    return (
        <form className="inputBox" onSubmit={handleSubmit}>
                <label htmlFor="addItem"></label>
                <input type="text" 
                       autoFocus
                       ref={inputRef}
                       value={newItem} 
                       id="addItem" 
                       onChange={(e) => setNewItem(e.target.value)} 
                       placeholder="Enter item" 
                       required></input>
                <button type="submit" onClick={() => inputRef.current.focus()}><FaPlus /></button>
        </form>
    )
}

export default AddItem;
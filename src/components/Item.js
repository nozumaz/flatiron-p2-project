import React from "react";

function Item({ toy, onDeleteClick }) {
    function handleDeleteClick(id) {
        fetch(`http://localhost:4000/toys/${id}`, {
            method: "DELETE"
       })
    .then(resp => resp.json())
    .then(() => onDeleteClick(id))
    }

    return (
        <div className="item">
            <h2>{toy.name}</h2>
            <img src={toy.image} alt="picture"/>
            <div className="button-container">
                <button className="delete" onClick={() => handleDeleteClick(toy.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Item;
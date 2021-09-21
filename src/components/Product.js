import React from "react";

export default function Product({title, legend, description, numberLeft, stock}) {
    return (
        <div className={stock === true? "product" : "product no-stock"}>
            <div className="title-wrapper">
            <h3> {title} </h3>
            <p className="pledge"> {legend} </p>
            </div>
            
            <p className="description"> {description} </p>

            <div className="left-wrapper">
            <h4> {numberLeft} </h4>
            <p className="left">left</p>
            </div>
            {stock === true
            ?
            <button type="button" className="stock-button">Select Reward</button>
            :
            <button type="button" className="no-stock-button">Out of stock</button>
            }
        </div>
    )
}
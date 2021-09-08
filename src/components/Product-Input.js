import React from "react";

export default function Input({id, title, pledge, description, numberLeft, stock}){
    return(
     <div className={stock === true? "input-element" : "input-element no-stock"}>
        <div className="input-wrapper">
        <input 
        type="checkbox"
        id={id}
        disabled={stock === false? "disabled" : ""}
        ></input>    
        <label htmlFor={id} className="title">
           {title} 
        </label> 
        <p className="pledge">{ pledge }</p>
        </div>
        <p className="pledge-description"> {description} </p>
        {numberLeft
        ?
        <div className="left-wrapper">
        <h4> {numberLeft} </h4>
        <p className="left">left</p>
        </div>:
        <React.Fragment></React.Fragment>
        }
        
     </div>
    )
}
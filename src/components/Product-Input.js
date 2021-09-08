import React from "react";

export default function Input({id, title, pledge, description, numberLeft}){
    return(
     <div className="input-element">
        <div className="input-wrapper">
        <input 
        type="checkbox"
        id={id}
        ></input>    
        <label htmlFor={id} className="title">
           {title} 
        </label> 
        <p className="pledge">{ pledge }</p>
        </div>
        <p className="pledge-description"> {description} </p>
        <div className="left-wrapper">
            <h4> {numberLeft} </h4>
            <p className="left">left</p>
         </div>
     </div>
    )
}
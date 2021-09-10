import React, {useState} from "react";

export default function Input({id, title, min, pledge, description, numberLeft, stock}){
   const [notChecked, setChecked] = useState(true)
    return(
     <div className={stock === true ? "input-element" : "input-element no-stock" }>
        <div className="input-wrapper">
        <input 
        type="checkbox"
        id={id}
        disabled={stock === false? "disabled" : ""}
        className="input-selected"
        onClick={()=> setChecked(!notChecked)}
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
        </div>
        :
        <React.Fragment></React.Fragment>
        }
        <div className={notChecked === true ? "hidden" : "pledge-wrapper"}>
        <label htmlFor="pledge"></label>
        <p className="pledge-label">Enter your pledge</p>
        <input type="number" className="pledge-input" id="pledge" min={min} max="1000"></input>
        <button type="submit">Continue</button>
        </div>
        
     </div>
    )
}
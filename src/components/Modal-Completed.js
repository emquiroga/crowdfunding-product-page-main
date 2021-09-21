import React, {Component, useState} from "react";
import Portal from "./Portal";

export default class Completed extends Component {
    render () {
        const { children, toggle, active } = this.props;

        const overlayDiv = document.getElementById("overlay");
        function modalOpen (){
            if (active){
                overlayDiv.classList.remove("fade-out")
                overlayDiv.classList.add("fade-in")
            } else {
                overlayDiv.classList.remove("fade-in")
                overlayDiv.classList.add("fade-out")
            }
        }
        modalOpen()
        return (
        <Portal>
            {active && (
            <div className="completed-container">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button 
                type="button"
                onClick={toggle}
            >Got it!</button>   
            </div>
            )}
        </Portal>  
        )
}
}
// export default function Completed({children, toggle, active}) {
//     const overlayDiv = document.getElementById("overlay");
//         function modalOpen (){
//             if (active){
//                 overlayDiv.classList.remove("fade-out")
//                 overlayDiv.classList.add("fade-in")
//             } else {
//                 overlayDiv.classList.remove("fade-in")
//                 overlayDiv.classList.add("fade-out")
//             }
//         }
//     const [completed, gotIt] = useState(true)
//     return (
//         <Portal>
//         <div className="completed-container">
//         <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
//         <h2>Thanks for your support!</h2>
//         <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
//         <button 
//         type="button"
//         onClick={()=> gotIt(!completed)}
//         >Got it!</button>   
//        </div>
//         </Portal>   
//     )
// }    
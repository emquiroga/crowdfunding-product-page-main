import React from "react";
export default function Stadistics() {
    return (
        <div className="stadistics">
            <div className="wrapper">
                <h3>$89,914</h3>
                <p>of $100,00 backed</p>
            </div>
            <span className="divider"></span>
            <div className="wrapper">
                <h3>5,007</h3>
                <p>total backers</p>
            </div>
            <span className="divider"></span>
            <div className="wrapper">
                <h3>56</h3>
                <p>days left</p>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}
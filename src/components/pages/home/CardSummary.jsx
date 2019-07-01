import React from 'react'

import "./css/card-summary.css"

const CardSummary = (props) => {
    return (
        <div className="card-summary-block">
            <div className="card-summary-content">
                <div className="card-summary-value">
                    <h2>{props.card.value}</h2>
                    <h6>{props.card.name}</h6>
                </div>
                <div className="card-summary-icon">
                    <h1>H</h1>
                </div>
            </div>
            <div className="card-summary-footer">
                <h6>More Info</h6>
            </div>
        </div>
    )
}

export default CardSummary;
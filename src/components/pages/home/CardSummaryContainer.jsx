import React, { Component } from 'react'
import CardSummary from './CardSummary';

class CardSummaryContainer extends Component {
  state = {
    summary: [
      {
        name: "asd",
        value: 2
      },
      {
        name: "das",
        value: 3
      }
    ]
  }

  renderCardSummary = (summary) =>{
    return summary.map((card) => (
      <CardSummary card={card} />
    ))
  }

  render() {
    const { summary } = this.state;
    return <div>
      {this.renderCardSummary(summary)}
    </div>
  }
}

export default CardSummaryContainer
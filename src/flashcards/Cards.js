import React from 'react';
import Card from './Card'
// import { Button, Icon, } from 'semantic-ui-react'

class Cards extends React.Component {
  state = {
    cards: [
      { id: 1, front: "this front", back: 'this back', },
      { id: 2, front: "this 2 front", back: 'this 2 back'},
      { id: 3, front: "this 3 front", back: 'this 3 back'},
      ]
    };


  renderCards = () => {
    const { cards, } = this.state;
    return cards.map( card =>
      <li key={card.id}>{card.front}</li>
    )
  };


  render() {
    return (
      <div>
        <ul>
          <h1>{ this.renderCards() }</h1>
        </ul>
      <hr />

      </div>
    )
  }
}


export default Cards;

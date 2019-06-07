import React from 'react';
import Card from './Card'
import MakeCard from './MakeCard'
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
      <li key={card.id} >{card.front}</li>
    )
  };
  addFunction = (cardData) =>{
    // whatever you get put it in the state that exists here!
    // and...we need to add an id
    let card = {id: this.getId, ...cardData}
    this.setState({cards:[...this.state.cards, card]})

  }

  getId = () => {
    return Math.floor(( 1 + Math.random()) * 10000)
  }

  render() {
    return (
      <div>
        <MakeCard add={this.addFunction}/>
        <ul>
          <h1>{ this.renderCards() }</h1>
        </ul>
      <hr />

      </div>
    )
  }
}


export default Cards;

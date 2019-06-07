import React from 'react';
import Cards from './Cards';


class Deck extends React.Component {
  state: {
    cards: [
      { front: "this front", back: 'this back'},
      { front: "this 2 front", back: 'this 2 back'},
      { front: "this 3 front", back: 'this 3 back'},
    ]
  }

  render() {
    return (
      <>
      <Cards />
      
      </>
    )
  };
}

export default Deck;

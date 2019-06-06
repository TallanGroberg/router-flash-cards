import React from 'react';

const Import = () => {
  //dependencies

  import React from 'react';
  import { Container, Header, } from "semantic-ui-react";
  import { Route, Switch, } from 'react-router-dom';

  // routes

  import Home from './components/Home'
  import Navbar from './components/Navbar'
  import About from './components/About'
  import NoMatch from './components/NoMatch'

  // flash card imports

  import Cards from './flashcards/Cards';



};

export default Import;

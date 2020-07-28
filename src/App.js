import React from 'react';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from './pages/MoviesList';
import MovieDetail from './pages/MovieDetail';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
// const client = new ApolloClient({
//   uri: "https://ion-movies.herokuapp.com"
// });

function App() {
  return (
    <>
      <Switch>

        <Route path="/" exact component={MoviesList} />
        <Route path="/movie/:id" exact component={MovieDetail} />

      </Switch>
    </>
  )
}


export default App;

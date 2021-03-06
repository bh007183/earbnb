import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import ViewHouse from "./pages/ViewHouse"
import RenterLoggedIn from "./pages/RenterLoggedIn"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import SearchDisplay from "./pages/SearchResults"
import Container from '@material-ui/core/Container';



function App() {

  
const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          
        <Container style={{padding: "0px"}} maxWidth="lg">
          <Navbar/>
        <Route exact path="/">
            <Home/>
          </Route>
        <Route path="/login">
            <Login/>
          </Route>
        <Route path="/signup">
            <SignUp/>
          </Route>
        <Route path="/search">
            <SearchDisplay/>
          </Route>
        <Route path="/Renter">
            <RenterLoggedIn/>
          </Route>
      </Container>
   
          
        </Switch>
      </Router>


    </ApolloProvider>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Home} from './pages';
import { MultiplicationChart} from './1F_9X9/index';


class App extends Component {
  render() {
    return (
      <div className="container">
      {/* The corresponding component will show here if the current URL matches the path */}
      <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />

      <Route path="/MultiplicationChart" component={MultiplicationChart} />
      {/* <Route path="/books2" component={Books2} /> */}
    </div>
    );
  }
}


export default App;

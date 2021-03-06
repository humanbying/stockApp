import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from 'react-dom';
import App from './components/App'
import OneStock from "./components/OneStock"

class Main extends React.Component {

  constructor() {
    super();
  }
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
render(
  <Router history = {browserHistory}>
    <Route path='/' component ={Main}>
      <IndexRoute component={App}/>
      <Route path="/OneStock/:symbol" component ={OneStock}/>
    </Route>
  </Router>,
  document.getElementById("root")
);

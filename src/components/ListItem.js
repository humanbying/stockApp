import React, { Component } from 'react';
import OneStock from "./OneStock"
import { Link, browserHistory } from "react-router"
import TodoActions from "../actions/TodoActions"

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.navigateToOneStock = this.navigateToOneStock.bind(this)
  }


  navigateToOneStock(Symbol) {
    TodoActions.searchQuoteAPI(Symbol);
    // browserHistory.push(`/oneStock/${Symbol}`)    
  }

  render() {
    console.log("this.props:",this.props)
    const { Symbol, Name, Exchange } = this.props
    return (
      <tr onClick={() => this.navigateToOneStock(Symbol)}>
        <td>{ Symbol }</td>
        <td>{ Name }</td>
        <td>{ Exchange }</td>
      </tr>
  )
  }
}

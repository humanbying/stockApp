import React, { Component } from 'react';
import OneStock from "./OneStock"
import StockActions from "../actions/StockActions"
import { Link, browserHistory } from "react-router"

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.navigateToOneStock = this.navigateToOneStock.bind(this)
  }

  navigateToOneStock(Symbol) {
   StockActions.getQuote(Symbol)
   browserHistory.push(`/oneStock/${Symbol}`)
  }

  render() {
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

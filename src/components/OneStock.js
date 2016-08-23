
import React, { Component } from 'react';
import StockStore from "../stores/StockStore";
import ServerActions from "../actions/ServerActions";
import StockActions from "../actions/StockActions";


export default class OneStock extends Component {
  constructor() {
    super();

    this.state = {
      quote: ''
    }

    this.getQuote = this.getQuote.bind(this)
  }

  componentDidMount() {
    StockStore.on('NEW_QUOTE', this.getQuote);
  }

  getQuote(){
    this.setState({
      quote: StockStore.getOneQuote()
    })
  }

  render() {
    let { Name, Symbol, LastPrice, MarketCap, High, Low, Open } = this.state.quote
    return (
      <div className="container">
        <h1><b>Stock App</b></h1>
        <hr/>
        <h2><b>  Name: </b>{ Name }</h2>
        <h2><b>  Symbol: </b>{ Symbol }</h2>
        <h3><b>  LastPrice: </b>{ LastPrice }</h3>
        <h3><b>  MarketCap: </b>{ MarketCap }</h3>
        <h3><b>  High: </b>{ High }</h3>
        <h3><b>  Low: </b>{ Low }</h3>
        <h3><b>  Open: </b>{ Open }</h3>
      </div>
    )
  }
}

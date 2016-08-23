
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

  reloadPage(symbol){
    console.log("loading....");
    StockActions.getQuote(symbol);
  }

  render() {
    let { Name, Symbol, LastPrice, MarketCap, High, Low, Open } = this.state.quote
    return (
      <div className="container">
        <h1><b>Stock App</b></h1>
        <hr/>
        <h2><b>  Name: { Name } <button className = "btn-success btn-xs" onClick = {() => this.reloadPage(Symbol)}>Refresh Quote</button><br/>
                 Symbol: { Symbol } </b></h2>

        <h3><b>  LastPrice: ${ LastPrice }<br/>
                 MarketCap: ${ MarketCap }<br/>
                 High: ${ High }<br/>
                 Low: ${ Low }<br/>
                 Open: ${ Open }</b></h3>
      </div>
    )
  }
}

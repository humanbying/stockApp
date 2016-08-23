import React, { Component } from 'react'
import ListItem from './ListItem'
import StockStore from '../stores/StockStore'
import StockActions from '../actions/StockActions'

export default class StockList extends Component {
  constructor() {
    super();

    this.state = {
      todos: StockStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
    this.getStocks = this.getStocks.bind(this);
  }

  componentDidMount() {
    StockStore.startListening(this._onChange);
    StockStore.on("NEW_STOCK", this.getStocks);
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      todos: StockStore.getAll()
    });
  }

  getStocks(){
    this.setState({
      stocks: StockStore.getStocks()
    })
  }

  render() {
    let ListItems;

      if(this.state.stocks) {

         ListItems = this.state.stocks.map((stock, index) => {
          return (

            <ListItem key={index} {...stock}/>
          )
        })
      }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Stock Name</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}

import React, { Component } from 'react';
import StockList from './StockList'
import NewStockForm from './NewStockForm'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Stock App</h1>
        <NewStockForm />
        <StockList />
      </div>
    )
  }
}

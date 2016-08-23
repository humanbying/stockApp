import React, { Component } from 'react';
import StockList from './StockList'
import NewTodoForm from './NewTodoForm'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Stock App</h1>
        <NewTodoForm />
        <StockList />
      </div>
    )
  }
}

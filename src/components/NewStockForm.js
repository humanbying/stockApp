import React, { Component } from 'react'
import StockActions from '../actions/StockActions'
import ServerActions from '../actions/ServerActions'
import StockStore from "../stores/StockStore"


export default class NewStockForm extends Component {
  constructor() {
    super();

    this.state = {
      task: ''
    }
    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeTaskInput(e) {
    let task = e.target.value;
    this.setState({ task })
  }

  submit(e) {
    e.preventDefault();
    let { task } = this.state;
    StockActions.searchAPI(this.state.task)
    this.setState({task: ''});
  }


  render() {
    let { task } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Enter New Stock:</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter Stock Symbol"
                   value={task}
                   onChange={this.changeTaskInput}/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

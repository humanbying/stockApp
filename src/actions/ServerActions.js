import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  findStock(data) {
    AppDispatcher.dispatch({
      type: "FIND_ONE_STOCK",
      data
    })
  }
}

export default ServerActions

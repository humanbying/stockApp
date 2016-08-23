import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  findStock(data) {
    AppDispatcher.dispatch({
      type: "FIND_ONE_STOCK",
      data
    })
  },
  searchOneQuote(data) {
    AppDispatcher.dispatch({
    type: 'SHOW_ONE_QUOTE',
    data
    })
  }
}
export default ServerActions

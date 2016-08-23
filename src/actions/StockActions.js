import API from '../API'

const StockActions = {
  searchAPI(name) {
    API.searchAPI(name)
  },
  getQuote(name) {
    API.getQuote(name)
  }
}

export default StockActions

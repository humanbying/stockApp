import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid';

let _todos = [];
let _stock;
let _quote;

class StockStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
          case "FIND_ONE_STOCK":
            _stock = action.data;
          this.emit('NEW_STOCK');
          break;
          case "SHOW_ONE_QUOTE":
            _quote = action.data;
            this.emit("NEW_QUOTE");
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _todos;
  }
  getStocks() {
    return _stock;
  }
  getOneQuote() {
    return _quote;
  }
}

export default new StockStore();

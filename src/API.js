import ServerActions from './actions/ServerActions'
import { getJSON } from "jquery"
import axios from 'axios'
import jsonp from "jsonp"

const API = {

  searchAPI(symbol){
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${symbol}`
      jsonp(url, function (err, data) {
      ServerActions.findStock(data)
    })
  },
  getQuote(symbol){
    let url = `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=${symbol}`
      jsonp(url, function (err, data) {
        if(err) console.log('err', err);
        console.log('data', data);
        ServerActions.searchOneQuote(data)
      })
  }
}

export default API;

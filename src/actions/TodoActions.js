import API from '../API'

const TodoActions = {
  getAllTodos: API.getAllTodos,
  createTodo(todo) {
    API.createTodo(todo);
  },
  searchAPI(name) {
    API.searchAPI(name)
  },
  searchQuoteAPI(name) {
    API.searchQuoteAPI(name)
  }
}

export default TodoActions

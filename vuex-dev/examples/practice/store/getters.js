export const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  seen: state => {
    return state.seen
  },
  todos: state => {
    return state.todos
  },
  somemessage: state => {
    return state.somemessage
  },
  items: state => {
    return state.items
  },
}

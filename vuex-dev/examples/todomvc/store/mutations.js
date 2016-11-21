export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[[],[]]')
      // todos: [
      //   [],
      //   []
      // ]

  }
  // console.log(state.todos);
export const mutations = {
  addTodo(state, {
      text, index
    }) {
      state.todos[index].push({
          text,
          done: false,
        })
        // console.log(state.todos[0][0].text);
    },

    deleteTodo(state, {
      todo, index
    }) {
      console.log(state.todos);
      state.todos[index].splice(state.todos[index].indexOf(todo), 1)
    },

    toggleTodo(state, {
      todo
    }) {
      todo.done = !todo.done
    },

    editTodo(state, {
      todo, value
    }) {
      todo.text = value
    },

    toggleAll(state, {
      done, index
    }) {
      state.todos[index].forEach((todo) => {
        todo.done = done
      })
    },

    clearCompleted(state, {
      index
    }) {
      console.log(state.todos[index])
      console.log(state.todos);
      state.todos[index] = state.todos[index].filter(todo => !todo.done)
      console.log(state.todos[index])
      console.log(state.todos);
      // state.todos = state.todos.filter(todo => !todo.done)
    }
}

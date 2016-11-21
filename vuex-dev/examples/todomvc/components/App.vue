<style src="todomvc-app-css/index.css"></style>

<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos {{index}}</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
    </header>
    <!-- main section -->
    <section class="main" v-show="todos[index].length">
      <input class="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll({ done: !allChecked ,index:index})">
      <ul class="todo-list">
        <todo v-for="todo in filteredTodos" :todo="todo" :index = "index"></todo>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos[index].length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos[index].length > remaining"
        @click="clearCompleted({index})">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Todo from './Todo.vue'

const filters = {
  // name: 'App',
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  name: 'App',
  props: ['index'],
  components: { Todo },
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    allChecked () {
      const { index } = this
      return this.todos[index].every(todo => todo.done)
    },
    filteredTodos () {
      const { index } = this
      return filters[this.visibility](this.todos[index])
    },
    remaining () {
      const { index } = this
      return this.todos[index].filter(todo => !todo.done).length
    }
  },
  methods: {
    addTodo (e) {
      var text = e.target.value
      const { index } = this
      if (text.trim()) {
        this.$store.commit('addTodo', { text,index})
      }
      e.target.value = ''
    },
    ...mapMutations([
      'toggleAll',
      'clearCompleted'
    ]),
    // clear(){
    //   const { index } = this
    //
    //   this.$store.commit('clearCompleted', {index})
    //   // console.log(index);
    // }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

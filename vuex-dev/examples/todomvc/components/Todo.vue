<template>
  <transition name="bounce">
    <li class="todo" :class="{ completed: todo.done, editing: editing }">
      <div class="view">
        <input class="toggle"
          type="checkbox"
          :checked="todo.done"
          @change="toggleTodo({ todo: todo })">
        <label v-text="todo.text" @dblclick="editing = true"></label>
        <button class="destroy" @click="deleteTodo({ todo: todo,index:index })"></button>
      </div>
      <input class="edit"
        v-show="editing"
        v-focus="editing"
        :value="todo.text"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        @blur="doneEdit">
    </li>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo','index'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapMutations([
      'editTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
    doneEdit (e) {
      const value = e.target.value.trim()
      const { todo } = this
      const { index } = this
      if (!value) {
        this.deleteTodo({
          todo,index
        })
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    /*transition: opacity .5s*/
    transition: all .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    background-color: #f00;
  }
  .todo{
    box-shadow: 10px 10px 5px #888888;
    border-radius: 10px;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>

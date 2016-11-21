import Vue from 'vue'
import Vuex from 'vuex'
import {
  mutations
}
from './mutations'
import {
  getters
}
from './getters'
Vue.use(Vuex)

const state = {
  message: '12345上山打老虎',
  count: 1,
  mess: '请输入内容',
  somemessage: 'erewrewr',
  // todos: [{
  //   id: 1,
  //   text: '...',
  //   done: true
  // }, {
  //   id: 2,
  //   text: '...',
  //   done: false
  // }],
  seen: true,
  // todos: [{
  //   text: 'Learn JavaScript'
  // }, {
  //   text: 'Learn Vue'
  // }, {
  //   text: 'Build something awesome'
  // }],
  todos: {
    FirstName: 'John',
    LastName: 'Doe',
    Age: 30
  },
  items: [{
    text: 'Learn JavaScript'
  }, {
    text: 'Learn Vue'
  }, {
    text: 'Build something awesome'
  }],
}
export default new Vuex.Store({
  state,
  mutations,
  getters
})

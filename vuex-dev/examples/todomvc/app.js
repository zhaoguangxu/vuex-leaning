import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import Main from './components/Main.vue'

new Vue({
  store, // inject store to all children
  el: '#main',
    render: h => h(Main)
})

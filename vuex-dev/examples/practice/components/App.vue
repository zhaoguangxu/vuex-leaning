<template>
  <div id="app">
    <div v-for="n in 2">
      <input type="text" v-model="message">
      <p>{{message}}</p>
      <p>{{ count }}</p>
    </div>

    <input :value="mess" @input="updateMess">
    <p>{{mess}}</p>
    <p v-if="seen">rewhrewioyydfhdsi</p>
    <ul :id="seen">
      <template v-for="(todo,key,index) in todos" >
      <li>{{todo}}</li>
      <p>{{key}}</p>
      <p>{{index}}</p>
      </template>
    </ul>
    <p>{{somemessage | capitalize}}</p>
    <com v-for="item in items" v-bind:item="item"></com>
  </div>

</template>

<script>
import { mapState,mapGetters } from 'vuex'
import Com from './Com.vue'
export default {
  
  components: { Com },
  computed: {
    message: {
        get () {
          return this.$store.state.message
        },
        set (value) {
          this.$store.commit('updateMessage', value)
        }
    },
    count(){
      return this.$store.state.count + 2;
    },

    // ...mapState({
    //   mess:'mess'
    // }),
    // ...mapGetters(
    //   'seen'
    // )
    // ...mapState({
    //   mess: state => state.mess
    // })
    mess(){
      return this.$store.state.mess;
    },
    // seen(){
    //   return this.$store.state.seen;
    // }
    // seen(){
    //   return this.$store.getters.seen
    // }
    ...mapGetters(["seen","todos","somemessage","items"])
    // ...mapGetters({seen:"seen"})
  },
  methods:{
    updateMess (e) {
      this.$store.commit('updateMess', e.target.value)
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style lang="css">
</style>

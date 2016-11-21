<template >
  <div>
    <app v-for=" (n,index) in 2" v-bind:index="index"></app>
  </div>

</template>

<script>
  import App from './App.vue'
  export default {
    components: { App },
    props: ['todos']
  }
</script>

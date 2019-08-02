<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <day01 v-bind:msgchild="msg"></day01>
      <input v-model="msg">
      <todoItem v-for="item in sites" v-bind:todo="item"></todoItem>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import day01 from './components/day01.vue'
import todoItem from './components/todo-item.vue'
var data={
    msg:"我是父组件传给子组件的值",
    sites: [
        { text: 'Runoob' },
        { text: 'Google' },
        { text: 'Taobao' }
    ]

}
export default {
  name: 'app',
    data(){
      return data
    },
  components: {
      // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    day01,
    todoItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <day01 v-bind:msgchild="msg"></day01>
      <input v-model="msg">
      <todoItem v-for="item in sites" v-bind:todo="item"></todoItem>
      <p>{{total}}</p>
      <button-counter v-on:increment="incrementTotal"></button-counter>
      <button-counter v-on:increment="incrementTotal"></button-counter>
<!--      <input v-focus>-->
    <div v-mydirective:hello.a.b="msg2"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import day01 from './components/day01.vue'
import todoItem from './components/todo-item.vue'
import ButtonCounter from "@/components/button-counter";
var data={
    msg:"我是父组件传给子组件的值",
    sites: [
        { text: 'Runoob' },
        { text: 'Google' },
        { text: 'Taobao' }
    ],
    total:0,
    msg2:'调用自定义指令'

};
export default {
  name: 'app',
    data(){
      return data
    },
  components: {

    HelloWorld,
    day01,
    todoItem,
    ButtonCounter,
  },
    methods:{
      incrementTotal:function () {
          this.total+=1
      }
    },
  //自定义指令
  directives:{
      focus:{
        inserted:function (el) {
            el.focus()
        }
      },
    /**
     * el: 指令所绑定的元素，可以用来直接操作 DOM 。
     binding: 一个对象，包含以下属性：
     name: 指令名，不包括 v- 前缀。
     value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
     oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
     expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
     arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
     modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
     vnode: Vue 编译生成的虚拟节点。
     oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

     * @param el
     * @param binding
     * @param vnode
     */
    mydirective:{
      bind:function (el,binding,vnode) {
      var s=JSON.stringify
      el.innerHTML='name:'+s(binding.name)+'<br>'+
              'value:'+s(binding.value)+'<br>'+
              'expression:'+s(binding.expression)+'<br>'+
              'argument:'+s(binding.arg)+'<br>'+
              'modifiers:'+s(binding.modifiers)+'<br>'+
              'vnode keys:'+Object.keys(vnode).join(',')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

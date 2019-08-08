<template>
  <div id="app">
<!--      <ul>-->
<!--          <li><a href="/">a标签跳转的路由会刷新页面home</a></li>-->
<!--          <li><router-link to="/">router-link不刷新页面home</router-link></li>-->
<!--          <li><router-link to="/helloWorld">helloWorld</router-link></li>-->
<!--      </ul>-->
<!--      <router-view></router-view>-->
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  var data={
  };
  export default {
    name: 'app',
    data(){
      return data
    },
    components:{
      "app-header":Header
    }

}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: left;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>

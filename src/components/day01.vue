<template>
    <div id="day01">
        v-html指令<div v-html="massage"></div><br>
        <h1>{{massage}}</h1>
        计算{{5+5}}<br>
        判断布尔{{ok?'yes':'no'}}<br>
        反转{{msg.split('').reverse().join('')}}<br>
        <label for="r1">修改颜色<input type="checkbox" v-model="use" id="r1"></label>
        <div v-bind:class="{'class1':use}">v-bind:class 指令</div><br>
        <div v-bind:id="'list'+id">v-bind:id指令</div>
        <br>
        <div v-if="seen">v-if指令，现在你看到我了</div>
        <br>
        <pre><a v-bind:href="url">v-bind:href,百度</a></pre>
        <br>
        {{msg2}}
        <button v-on:click="reverseMessage">反转字符串</button>
        <br>
        字符串第一个字母转为大写{{msg2 | capitalize}}
        <br>
        if判断
        <div v-if="type==='a'">a</div>
        <div v-else-if="type==='b'">b</div>
        <div v-else>c</div>
        <div v-show="ok">v-show</div>
        v-for
        <ul>
            <li v-for="(value,key,index) in object">
                {{index}}:{{key}}:{{value}}
            </li>
        </ul>
        <p style = "font-size:25px;">计数器: {{ counter }}</p>
        <button @click = "counter++" style = "font-size:25px;">点我</button>
        千米 : <input type = "text" v-model = "kilometers">
        米 : <input type = "text" v-model = "meters">
        <div v-bind:class="{active:isActive}">xxx</div>
        <div class="static"
             v-bind:class="{ active: isActive, 'text-danger': hasError }">
            xxx
        </div>
        <button @click="greet">greet</button>
        <!--复选框-->
        <p>单个复选框：</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label>
        <p>多个复选框：</p>
        <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
        <label for="runoob">Runoob</label>
        <input type="checkbox" id="google" value="Google" v-model="checkedNames">
        <label for="google">Google</label>
        <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
        <label for="taobao">taobao</label>
        <br>
        <span>选择的值为: {{ checkedNames }}</span>
        <br>
        {{msgchild}}
    </div>
</template>

<script>
    var data={
        massage:'xxxxxx',
        ok:true,
        msg:'My',
        msg2:'mySa',
        use:false,
        id:1,
        seen:true,
        url:'https://www.baidu.com',
        type:'c',
        object: {
            name: '菜鸟教程',
            url: 'http://www.runoob.com',
            slogan: '学的不仅是技术，更是梦想！'
        },
        counter:1,
        kilometers : 0,
        meters:0,
        isActive: true,
        hasError: true,
        checked:false,
        checkedNames:[]
    };

    export default {
        name: "day01",
        data() {
            return data;
        },
        props:{
            msgchild:String
        },
        //方法
        methods: {
            reverseMessage: function () {
                this.msg2 = this.msg2.split('').reverse().join('')
            },
            greet:function (event) {
                alert(''+this.msg+'!')
                if (event){
                    alert(event.target.tagName)
                }
            }
        },
        //    过滤器
        filters: {
            capitalize: function (value) {
                // debugger;
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        //    计算
        /**
         * 我们可以使用 methods 来替代 computed，
         * 效果上两个都是一样的，但是 computed 是基于它的依赖缓存，
         * 只有相关依赖发生改变时才会重新取值。
         * 而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
         */
        computed: {
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.msg2.split('').reverse().join('')
            }
        },
        //    监听属性
        watch:{
            counter:function (nval,oval) {
                alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
            },
            kilometers:function (nval) {
                this.kilometers=nval;
                this.meters=this.kilometers*1000;
            },
            meters : function (val) {
                this.meters = val;
                this.kilometers = val/ 1000;

            }
        }
    }
</script>

<style scoped>
    .class1{
        background: #444;
        color: #eee;
    }
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
    .text-danger {
        background: red;
    }
</style>
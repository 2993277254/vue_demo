<template>
    <div id="todo-item">
        <ol>
            <li>{{todo.text}}</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "todo-item",
        props:{
            todo:String
        }
    }
</script>

<style scoped>

</style>
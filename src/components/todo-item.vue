<template>
    <div id="todo-item">
        <ol>
            <li>{{todo.name}}</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "todo-item",
        props:{
            todo:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div name="button-counter">
        <button @click="incrementHandler">{{counter}}</button>
    </div>
</template>

<script>
    var data={
        counter:0
    };
    export default {
        name: "button-counter",
        data(){
            return data;
        },
        methods:{
            incrementHandler:function () {
                this.counter+=1;
                this.$emit('increment')
            }
        }

    }
</script>

<style scoped>

</style>
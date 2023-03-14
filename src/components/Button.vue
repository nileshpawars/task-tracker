<template>
    <button @click="onClick()" class="btn btn-dark" :style="{background:color}">{{ title }}</button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            title: String,
            color: String
        },
        methods: {
            onClick() {
                this.$emit('btn-click')
            }
        }
    }
</script>

<style scoped>

</style>
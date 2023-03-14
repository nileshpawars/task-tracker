<template>
    <div @click="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{ task.text }} <i @click="$emit('delete-task', task.id)" class="bi bi-x-lg"></i></h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
    export default {
        name: "Task",
        props:{
            task: Object
        }
    }
</script>

<style scoped>
    h3, p {
        padding: 0;
        margin: 0;
    }
    .task {
        background: #eee;
        margin-bottom: 5px;
        padding: 10px;
    }

    .task h3 {
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .task.reminder {
        border-left: 3px solid green;
    }

    .task i {
        cursor: pointer;
    }
</style>
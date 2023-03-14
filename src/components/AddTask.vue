<template>
    <form class="mb-3" @submit="onSubmit">
        <div class="mb-3">
            <label for="textInput" class="form-label">Task</label>
            <input name="text" type="text" v-model="text" class="form-control" id="textInput" placeholder="Add Task">
        </div>
        <div class="mb-3">
            <label for="dayInput" class="form-label">Day & Time</label>
            <input name="day" type="text" v-model="day" class="form-control" id="dayInput" placeholder="Add Day & Time">
        </div>
        <div class="mb-3 form-check">
            <input name="reminder" type="checkbox" v-model="reminder" class="form-check-input" id="Check1">
            <label class="form-check-label" for="Check1">Set Reminder</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
</template>

<script>
    export default {
        name: "AddTask",
        data() {
                return {
                text: '',
                day: '',
                reminder: false
            }
        },
        methods: {
            onSubmit(e) {
            e.preventDefault();
             if(!this.text) {
                alert('Please add task');
                return
             }
             
             const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
             }

             this.$emit('add-task', newTask);

             this.text = ""
             this.day = ""
             this.reminder = false
            }
        }
    }
</script>
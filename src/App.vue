<template>
  <div class="container">
    <div class="wrapper">
      <Header @toggle-add-task="toggleShowTask" :showAddTask="showAddTask" title="Task Tracker" />
      <router-view :showAddTask="showAddTask"></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

  export default {
    name: "App",
    components: {
      Header,
      Footer
    },
    data() {
        return {
          showAddTask: false
        }
      },
    methods:{
        toggleShowTask(){
          this.showAddTask = !this.showAddTask
        },
      }
  }
</script>

<style scoped>
  .wrapper {
    width: 500px;
  }
</style>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@gmail.com",
        contact: "+91 9801234567",
        gender: "male",
        picture: "https://randomuser.me/api/portraits/men/32.jpg",
        isDisabled: false,
        isPromoted: true,
        isFeatured: true,
        isPremium: 0,
      }
    },
    methods: {
      async getUser() {
        const res = await fetch('https://randomuser.me/api');
        const { results } = await res.json();

        this.firstname= results[0].name.first,
        this.lastname= results[0].name.last,
        this.email= results[0].email,
        this.contact= results[0].phone,
        this.gender= results[0].gender,
        this.picture= results[0].picture.large,
        this.isPremium= 1
      }
    }
  }
</script>

<template>
  <div class="wrapper" :class="gender">
    <img :class="gender" :src="picture" :alt="`${firstname} ${lastname}`">
    <h1>{{firstname}} {{lastname}}</h1>
    <h4>{{email}}</h4>
    <label class="badge bg-success" v-show="contact">{{contact}}</label>

    <button :class="['btn', 'btn-primary']" type="button" :disabled="isDisabled" v-on:click="getUser()">Get Random User</button>

    <label class="badge bg-secondary me-1" :class="isPromoted ? 'visible':'visually-hidden'">Promoted</label>
    <label class="badge bg-danger me-1" :class="{
      visible: isFeatured,
      'visually-hidden': !isFeatured,
    }">Featured</label>

    <label class="badge bg-dark" v-if="gender === 'female'">Premium</label>
    <label class="badge bg-info" v-else="gender === 'male'">Classic</label>
  </div>
</template>

<style scoped>
  .wrapper {
    text-align: center;
    margin:0 auto;
    border: 1px solid #666;
    padding: 20px;
  }
  img {
    border-radius: 50%;
  }
  button {
    text-align: center;
    display: block;
    margin: 10px auto;
    box-shadow: none;
  }
  button:hover, button:focus {
    background: #333;
    box-shadow: none;
  }
  .male {
    border: 5px solid #0E4E95;
  }
  .female {
    border: 5px solid pink;
  }
  .female button {
    background: pink;
    color: black;
    border-color: pink;
  }
  .female button:hover {
    opacity: 0.8
  }
</style>

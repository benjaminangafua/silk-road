
<template>

    <div class="container">
      <Header />
      <router-view> </router-view>

    </div>
</template>

<script>
  import Header from './components/Header.vue' 

  export default {
    name: "App",
    components: {
      Header,
    }
  }
</script>
<!-- <script src="https://kit.fontawesome.com/2cbdfe2c2a.js" crossorigin="anonymous"></script> -->
<style>
  @import './assets/main.css';
  
 </style>

<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header>
     <navbar></navbar>
    </header>
    <router-view/>
    <appFooter></appFooter>

  </div>
</template>

<script>

  import Navbar from '@/components/Navbar.vue';
  import AppFooter from '@/components/AppFooter.vue';
  
export default {
  components: {
    navbar: Navbar,
    appFooter: AppFooter
  }
}
</script>

<style>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {  
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
@import url('https://fonts.googleapis.com/css2?family=Lora&family=Montserrat:wght@200;300;400;700&display=swap');

    /* font-family: 'Lora', serif;

    font-family: 'Montserrat', sans-serif; */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  /* width: 100vw; */
  /* height: 500vh; */
  /* background: hsl(200, 50%, 90%); */
  position: relative;
  font-family: 'Montserrat', sans-serif;
}
</style>
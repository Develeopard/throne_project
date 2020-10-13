<template>
      <div
      class="navbar"
      :class="{ 'navbar--hidden': !showNavbar,
                'change_style' : lastScrollPosition < 1}"
    >
      <div class="menu">
        <div class="logo" :class="{'logo_switch' : lastScrollPosition < 1}">

        </div>
        <ul class="navigation">
          <router-link tag="li" to="/"><a class="link">Home</a></router-link>
          <router-link tag="li" to="/work"><a class="link">Work</a></router-link>
          <!-- <span @click="isOpen = !isOpen" class="services" href="#">Services <i class="fas fa-chevron-up"></i></span> -->
          <dropdown></dropdown>
        </ul>
      </div>

    </div>
</template>

<script>

  import Dropdown from '@/components/Dropdown.vue'
  
export default {
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },
  components :{
    dropdown: Dropdown
  },
  mounted () {
      window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
          return
        }    // Here we determine whether we need to show or hide the navbar
        this.showNavbar = currentScrollPosition < this.lastScrollPosition    // Set the current scroll position as the last scroll position
        this.lastScrollPosition = currentScrollPosition
      },
    updateScroll(){
      this.scrollPosition = window.scrollY
    }
}
}
</script>

<style>
.navbar {
  height: 60px;
  width: 100%;
  background: hsl(0, 0%, 100%);
  position: fixed;
  /* box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5); */
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 99;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.menu{
  border: 1px solid yellow;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  justify-content: space-between;
}

.logo{
  border: 1px solid pink;
  width: 130px;
  height: auto;

  background-position: center;
  background-size: cover;
  background-image: url('../assets/logo_black.png');
}

.logo_switch{
  /* border: 1px solid pink; */
  width: 180px;
  /* height: auto;

  background-position: center;
  background-size: cover; */
  background-image: url('../assets/logo_white.png');
}

.navigation{
  border: 1px solid blue;
  width: 30%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navigation .link{
  /* border: 1px solid black; */
  display: block;
  position: relative;
  text-decoration: none;
  font-size: .8rem;
  font-weight: bold;
  color: black;
}

.navigation .link::after{
  content: '';
  position: absolute;
  display: block;
  top: 110%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.2s linear;
}

.navigation .link:hover::after{
  transform: scaleX(1);
  transform-origin: bottom left;
}

.navigation span{
  text-decoration: none;
  font-size: .8rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.fas{
  margin-left: 5px;
  transition: .2s linear;
}

.services:hover > .fas{
  transform: rotateZ(180deg);
}

.change_style{
  background-color: rgba(255, 255, 255, 0.432);
  height: 80px;
}

.change_style .link{
  color: white;
}

.change_style .link::after{
  background-color: white;
}

.change_style span{
  color: white;
}

.change_style span::after{
  background-color: white;
}

</style>
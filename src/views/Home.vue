<template>
  <div class="home">
    <homeHero></homeHero>
    <homeServices></homeServices>
    <homeYt></homeYt>
    <homeExplore></homeExplore>
    <profileCards></profileCards>
    <awards></awards>
    <openSource></openSource>
    <homeBenefit></homeBenefit>
    <homeTalk></homeTalk>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import HomeHero from '@/components/HomeHero.vue';
  import HomeServices from '@/components/HomeServices';
  import HomeYt from '@/components/HomeYt';
  import HomeExplore from '@/components/HomeExplore';
  import ProfileCards from '@/components/ProfileCards';
  import Awards from '@/components/Awards';
  import OpenSource from '@/components/OpenSource';
  import HomeBenefit from '@/components/HomeBenefit';
  import HomeTalk from '@/components/HomeTalk';
  
export default {
  name: 'Home',
  components: {
    homeHero: HomeHero,
    homeServices: HomeServices,
    homeYt: HomeYt,
    homeExplore: HomeExplore,
    profileCards: ProfileCards,
    awards: Awards,
    openSource: OpenSource,
    homeBenefit: HomeBenefit,
    homeTalk: HomeTalk
  }
}
</script>

<style scoped>
  h1{
    color: red;
  }
</style>
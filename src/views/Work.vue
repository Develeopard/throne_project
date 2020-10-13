<template>
  <div class="work">
    <div class="work-content">
      <div class="work-hero">
        <div class="hero-txt">
          <h1 class="work-hero-hl">Explore Our Work</h1>
          <p class="work-hero-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error vero id.</p>
        </div>
      </div>
    </div>
      <workSections></workSections>

  </div>
</template>

<script>
import WorkSections from '../components/work/WorkSections.vue';


export default {
  name: 'Work',
  components: {
    workSections: WorkSections,
  }
}
</script>

<style scoped>
  .work{
    width: 100%;
  }

  .work-hero{
    background-image: url('../assets/work-bg.jpg');
    height: 900px;
    padding: 0 20px;
    text-align: center;
    display: grid;
    place-items: center;
    color: white;
  }

  h1{
    font-size: 4rem;
    margin-bottom: 20px;
  }
</style>

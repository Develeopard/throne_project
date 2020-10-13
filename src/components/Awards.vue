<template>
  <div class="awards">
    <div class="awards-content">
      <div class="awards-text">
        <h1 class="awards-hl">Our Awards</h1>
        <p class="awards-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <ul class="awards-badges">
        <li>
          <img src="../assets/Website-12.png" alt="">
        </li>
        <li>
          <img src="../assets/Website-7.png" alt="">
        </li>
        <li>
          <img src="../assets/Website-2.png" alt="">
        </li>
        <li>
          <img src="../assets/Website-11.png" alt="">
        </li>
        <li>
          <img src="../assets/2020-custom.png" alt="">
        </li>
        <li>
          <img src="../assets/Website-5.png" alt="">
        </li>
        <li>
          <img src="../assets/Website-6.png" alt="">
        </li>
        <li>
          <img src="../assets/Website-3.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
  .awards{
    width: 100%;
    /* background-color: pink; */
    padding: 100px 20px;
  }

  .awards-content{
    max-width: 80%;
    margin: 0 auto;
  }

  .awards-text{
    text-align: center;
  }

  .awards-hl{
    font-size: 4rem;
    line-height: 1.4;
  }

  .awards-txt{
    font-size: 1.6rem;
    font-weight: lighter;
  }

  .awards-badges{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 100px;
    grid-row-gap: 60px;
    max-width: 80%;
    margin: 100px auto 100px auto;
  }

  .awards-badges li{
    /* border: 1px solid red; */
  }

  .awards-badges img{
    width: 100%;
  }

  @media(max-width: 560px){
    .awards-hl{
      font-size: 3.2rem;
    }
  }

  @media (max-width: 360px){
    .awards-badges{
      max-width: 100%;
    }
  }


</style>
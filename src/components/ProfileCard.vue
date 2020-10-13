<template>
  <div class="profile-card">
      <div class="profile-card-img">
          <img :src="profileCard.src" alt="">
      </div>
      <div class="profile-card-text">
          <h2 class="profile-card-hl">
              {{ profileCard.title}}
          </h2>
          <p class="profile-card-txt">{{profileCard.text}}</p>
          <button class="profile-card-btn">{{ profileCard.btn}}</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'profileCard',
    props: ['profileCard']
}
</script>

<style>
    .profile-card{
        /* border: 1px solid red; */
        /* max-width: 300px; */
        box-shadow: 0px 70px 80px rgba(228, 228, 228, 0.548);
        overflow: hidden;
        height: 620px;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
    }

    /* .profile-card:nth-child(2) > div{
        margin-top: -42px;
    }

    .profile-card:nth-child(2) > .profile-card-img{
        margin-top: 0px;
    } */

    .profile-card-img{
        margin-bottom: -80%;
    }

    .profile-card-img img{
        width: 100%;
    }

    .profile-card-text{
        /* position: relative; */
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        padding: 20px 20px;
        /* z-index: 22; */
    }

    .profile-card-btn{
        margin-top: 20px;
        border: 2px solid black;
        border-radius: 2px;
        padding: 7px 12px;
        text-transform: uppercase;
        font-weight: bold;
        background-color: white;
        transition: all .3s;
    }

    .profile-card-btn:hover{
        background-color: blue;
        border: 2px solid blue;
        color: white;
    }
</style>
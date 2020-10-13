<template>
    <div class="homeYt">

        <transition name="vid" appear="">
            <div class="iframe-container" v-if="showVideo"  @click="showVideo = false">
                <iframe class="YT-video" width="560" height="315" src="https://www.youtube.com/embed/ib43NVgp_x0?autoplay=1" frameborder="0" allow="accelerometer; ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </transition>
      <div class="homeyt-container">
          <!-- <div class="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ib43NVgp_x0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> -->
          <div class="hyt-img" @click="showVideo = true">
            <div class="hyt-img-btn">
                <i class="play-btn fas fa-play"></i>
            </div>
          </div>
          
          <div class="homeYt-text">
              <p class="homeYt-txt">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi consequatur officia tempora voluptates vitae facere suscipit in incidunt eveniet, inventore corporis quae ratione expedita dicta architecto dolore impedit? Qui sapiente labore saepe, consequatur ratione aperiam unde id, sint pariatur ut deserunt atque fugiat, laudantium in ducimus!
              </p>
              <p class="author"><span>John Doe</span> - throne.io</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showVideo: false
        }
    }
}
</script>

<style>


    .homeyt-container{
        max-width: 80%;
        margin: 0 auto;
        padding: 120px 30px;
        display: grid;
        gap: 60px;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .hyt-img{
        background-image: url('../assets/johndoe.jpg');
        width: 100%;
        height: 500px;
        background-position: center;
        background-size: cover;
        position: relative;
        border-radius: 10px;
        cursor: pointer;
    }

    .hyt-img::before{
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
        z-index: 3;
    }

    .hyt-img:hover::before{
         width: 110px;
         height: 110px;
     }

    .hyt-img::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(130, 101, 235, 0.274);
        border-radius: 10px;
        opacity: 0;
        transition: .2s linear;
    }

    .hyt-img:hover::after{
        opacity: 1;
    }

    .play-btn{
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 2rem;
        transform: translate(-50%, -50%);
        z-index: 3;
    }
    /* video css//////////////////////////////////////// */

    .iframe-container{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom: 56.25%; 
        z-index: 98;
        width: 100%;
        height: 100%;
        background-color: rgba(10, 1, 1, 0.6);
    }

    .YT-video{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 60%;
        
    }

    .vid-enter-active,
    .vid-leave-active{
        transition: opacity .5s;
    }

    .vid-enter,
    .vid-leave-to{
        opacity: 0;
    }

/* text ///////////////////////////////////////////////////////// */

    .homeYt-txt{
        font-family: 'Lora', serif;
        font-size: 1.6rem;
        line-height: 2;
        position: relative;
    }

    .homeYt-txt::before{
        content: open-quote;
        position: absolute;
        display: block;
        top: -150px;
        left: 0;
        font-size: 10rem;
        color: blue;
    }

    .author{
        color: blue;
        font-size: 1.3rem;
        margin-top: 30px;
    }

    .author span{
        font-weight: bold;
    }

    /* ////////////////////////////// */
    @media(max-width: 880px){
        .homeyt-container{
            max-width: 100%;
        }

        .homeYt-txt{
            font-size: 1.3rem;
        }
    }

    @media(max-width: 740px){
        .homeyt-container{
            grid-template-columns: 1fr;
        }

        .homeYt-txt{
            margin-top: 30px;
        }
    }
</style>
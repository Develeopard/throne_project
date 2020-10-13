<template>
  <div class="hero">
    <div class="hero-content">
        <h4 class="hero-hl">we are throne.io</h4>
        <h1 class="hero-text">Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
        <a href="#" class="hero-btn">book a call</a>
        <video class="video-bg" autoplay muted loop>
            <source src="@/assets/video.mp4" type="video/mp4">
        </video>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home Hero'
}
</script>

<style>
    .hero{
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: start;
        color: white;
        background-image: linear-gradient(90deg, 
        rgba(32, 0, 90, 0.979), 
        rgba(223, 230, 255, 0.2));
        position: relative;
        overflow: hidden;
    }

    .hero-content{
        border: 1px solid white;
        max-width: 40%;
        margin-left: 15%;
    }

    .hero-hl{
        font-weight: normal;
        font-size: 1.7rem;
        margin-bottom: 14px;
    }

    .hero-text{
        font-weight: normal;
        font-size: 4rem;
        margin-bottom: 80px;
    }
    
    .hero-btn{
        display: inline-block;
        padding: 15px 30px;
        border-radius: 4px;
        background-color: blueviolet;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.6rem;
        transition: all .2s linear;
    }

    .hero-btn:hover{
        background-color: rgba(32, 32, 34, 0.863);
    }


    .video-bg{
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
    }

    @media(max-width: 1160px){
        .hero-text{
            /* color: rebeccapurple; */
            font-size: 3.2rem;
        }
    }

    @media(max-width: 900px){
        .hero-content{
            max-width: 100%;
            margin-left: 0;
            padding: 0 20px;
        }

        .hero-text{
            font-size: 1.8rem;
            font-weight: bold;
        }
    }
</style>
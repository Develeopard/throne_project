<template>
  <div class="talk">

        <transition name="vid" appear="">
            <div class="iframe-container" v-if="showVideo"  @click="showVideo = false">
                <iframe class="YT-video" width="560" height="315" src="https://www.youtube.com/embed/aGB8mK8WhGg?autoplay=1" frameborder="0" allow="accelerometer; ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </transition>

      <div class="talk-content">
          <h1 class="talk-hl">Talk to us and <span>get your project moving!</span></h1>
          
          <div class="talk-elements">
              <div class="talk-vid-element">
                  <p class="talk-bold-txt">This is exactly what will happen after you submit your form: </p>
                  <div class="talk-vid-img" @click="showVideo = true">
                      <div class="talk-img-btn">
                          <i class="play-btn fas fa-play"></i>
                      </div>
                  </div>
                  <ul class="talk-check-list">
                      <li class="talk-check-item">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                      <li class="talk-check-item">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                      <li class="talk-check-item">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
              </div>

              <!-- form -->
              <form>
                  <textarea v-model="message" placeholder="Project Details" cols="3" rows="10"></textarea>
                  <select name="" id="budget"  v-model="selectedBudget" >
                      <option v-for="budget in budgets" :key="budget">{{ budget }}</option>
                  </select>
                  <input type="text" id="name" v-model="userData.name" placeholder="Name">
                  <input type="email" id="email" v-model="userData.email" placeholder="Email">
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showVideo: false,
            userData: {
                name: '',
                email: '',
            },
            message: '',
            budgets: ['Budget Size', '- 30k', '30k > 150k', '+ 150k'],
            selectedBudget: 'Budget Size'
            
        }
    }
}
</script>

<style>
    .talk{
        width: 100%;
        /* background-color: pink; */
    }

    .talk-content{
        max-width: 80%;
        margin: 0 auto;
        padding: 120px 30px;
    }

    .talk-hl{
        font-size: 3rem;
        font-weight: normal;
        text-align: center;
        margin-bottom: 50px;
    }

    .talk-hl span{
        font-weight: bolder;
    }

    /* talk elements//////////////////////// */
    .talk-elements{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 180px;
        /* align-items: center;
        justify-content: center; */
        max-width: 100%;
        /* border: 1px solid black; */
    }

    .talk-vid-element{
        max-width: 100%;
    }

    .talk-bold-txt{
        color: gray;
        font-weight: bold;
        font-size: .9rem;
        margin-bottom: 10px;
    }



    .talk-check-list{
        list-style: none;
    }

    .talk-check-item{
        margin-top: 20px;
        font-size: .9rem;
        position: relative;
    }

    .talk-check-item::before{
        content: "\f00c";
        /* position: absolute; */
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        margin-right: 10px;
    }

    /* talk video//////////////////////// */

    .talk-vid-img{
        background-image: url('../assets/talk-vid-img.jpg');
        width: 100%;
        height: 300px;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        position: relative;
    }

    .talk-vid-img::before{
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

    .talk-vid-img:hover::before{
        width: 110px;
        height: 110px;
    }

    .talk-vid-img::after{
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

    .talk-vid-img:hover::after{
        opacity: 1;
    }

    /* form ///////////////////////////////////////////////// */
    form{
        display: grid;
        grid-row-gap: 20px;
        /* display: inline-block; */
    }

    select, input, textarea{
        padding: 7px;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        border-radius: 3px;
        border: none;
        outline: none;
        background-color: rgb(238, 235, 235);
        /* max-width: 100%; */
    }

    select{
        /* background-color: white; */
        margin: 0;      
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;

        background-image:
            linear-gradient(45deg, transparent 50%, gray 50%),
            linear-gradient(135deg, gray 50%, transparent 50%),
            linear-gradient(to right, #ccc, #ccc);
        background-position:
            calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px),
            calc(100% - 2.5em) 0.5em;
        background-size:
            5px 5px,
            5px 5px,
            1px 1.5em;
        background-repeat: no-repeat;

        cursor: pointer;
    }

    @media(max-width: 1100px){
        .talk-elements{
            grid-column-gap: 40px;
        }
    }

    @media(max-width: 860px){
        .talk-elements{
            grid-template-columns: 1fr;
            grid-column-gap: 0px;
        }

        form{
            margin-top: 40px;
        }
    }

    @media(max-width: 496px){
        .talk-content{
            max-width: 100%;
        }

        .talk-hl{
            font-size: 0.8em;
        }
    }


</style>
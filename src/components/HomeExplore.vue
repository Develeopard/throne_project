<template>
  <div class="explore">
      <div class="explore-content">
          <div class="explore-text">
              <h1 class="explore-hl">Explore Our Case Studies</h1>
              <p class="explore-txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, magnam? Praesentium, alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <div class="explore-showcase">
              <div data-hover-only="true" id="scene">
                  <div data-depth="0.7" class="first-layer"><img src="../assets/CREDIT-2-4.png" alt=""></div>
                  <div data-depth="1.2" class="second-layer"><img src="../assets/CREDIT-2-3.png" alt=""></div>
                  <div data-depth="1.7" class="third-layer"><img src="../assets/REIC-tilt-2.png" alt=""></div>
                  <div data-depth="2.9" class="fourth-layer"><img src="../assets/REIC-tilt-1.png" alt=""></div>
              </div>

              <div class="showcase-text">
                  <h4 class="fintech">fintech</h4>
                  <h3 class="reic">reic</h3>
                  <div class="showcase-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla sed pariatur sapiente, doloribus exercitationem cum, minus qui dolores, ipsam aut officiis? Itaque quam quasi alias impedit? Pariatur perspiciatis veniam nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam vitae omnis optio libero impedit quia nisi illum.</div>
                  <button class="showcase-btn">see case study</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    

}
</script>

<style>
.explore{
    width: 100%;
    /* height: auto; */
    /* background-color: burlywood; */
    padding-bottom: 100px;
}

.explore-content{
    max-width: 80%;
    margin: 0 auto;
    padding: 120px 30px;
}

.explore-text{
    text-align: center;
    max-width: 60%;
    margin: 0 auto 50px auto;
}

.explore-hl{
    font-size: 4rem;
    line-height: 1.4;
}

.explore-txt{
    font-size: 1.6rem;
    font-weight: lighter;
    line-height: 1.4;
}



.explore-showcase{
    /* background-color: pink; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    justify-content: center;
    align-items: center;
}

.showcase-text{
    /* max-width: 350px; */
    /* border: 1px solid blue; */
    place-self: center;

}

.fintech{
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.reic{
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.showcase-txt{
    color: gray;
    font-size: .9rem;
    font-weight: normal;
    margin-bottom: 20px;
}

.showcase-btn{
    background-color: white;
    display: block;
    outline: none;
    border: 2px solid blue;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: .8rem;
    font-weight: bold;
    color: blue;
    text-transform: uppercase;
    transition: all .2s linear;
}

.showcase-btn:hover{
    background-color: blue;
    color: white;
}


/* parallax js code///////////////////////////////////////////////////////////// */

#scene{
    /* border: 3px solid red; */
    position: relative;
    max-width: 474px;
    height: auto;

    padding: 20px;
}

.first-layer img{
    max-width: 100%;
    height: 100%;
    /* width: 474px;
    height: 631px; */
    /* border: 1px solid black; */
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background: url('../assets/CREDIT-2-4.png'); */
}

.second-layer img{
    max-width: 100%;
    height: 100%;
    /* width: 474px;
    height: 631px; */
    /* border: 1px solid black; */
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background: url('../assets/CREDIT-2-3.png'); */

}

.third-layer img{
    max-width: 100%;
    height: 100%;
    /* width: 474px;
    height: 631px; */
    /* border: 1px solid black; */
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background: url('../assets/REIC-tilt-2.png'); */
}

.fourth-layer img{
    max-width: 100%;
    height: 100%;
    /* width: 474px;
    height: 631px; */
    /* border: 1px solid yellow; */
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background: url('../assets/REIC-tilt-1.png'); */
    /* background-color: burlywood; */

}

.fourth-layer::after{
    content: 'Hover Me';
    position: absolute;
    /* display: block; */
    padding: 10px 30px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 255, 0.637);
    color: white;
    font-weight: bold;
    /* transition: opacity .2s linear; */
}

.fourth-layer:hover::after{
    background-color: red;

}

@media (max-width: 860px) {
    .explore-content{
        max-width: 100%;
    }

    #scene{
        max-width: 100%;
    }
}

@media (max-width: 580px){
    .explore-showcase{
        grid-template-columns: 1fr;
    }

    .explore-hl{
        font-size: 3.2rem;
    }
}
</style>
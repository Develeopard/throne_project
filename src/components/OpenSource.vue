<template>
  <div class="open-source">
      <div class="open-source-content">
          <div class="open-source-text">
              <h1 class="open-source-hl">open source</h1>
              <p class="open-source-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, veritatis pariatur.</p>
          </div>

          <div class="open-source-cards">
              
              <!-- CARD -->
              <div class="open-source-card">
                  <div class="card-content cc1">

                    <!-- front card -->
                    <div class="card-front">
                        <!-- <h3 class="card-title">The Card</h3>
                        <p>card front</p> -->
                    </div>

                    <!-- back card -->
                    <div class="card-back">
                        <div class="top-card">
                            <h3 class="card-hl">Loopback</h3>
                        </div>
                        
                        <div class="middle-card">
                            <div class="reach">
                                <p class="reach-hl">Reach</p>
                                <h5 class="reach-txt">13000 Git Stars</h5>
                            </div>

                            <div class="participation">
                                <p class="participation-hl">Participation</p>
                                <h5 class="participation-txt">
                                    External Colaborator
                                </h5>
                            </div>
                        </div>

                        <div class="bottom-card">
                            <p class="bottom-card-txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam non dolorum quo voluptatibus maxime alias nesciunt debitis consequatur magnam soluta nulla odit natus hic.
                            </p>
                            <i class="fab fa-github"></i>
                        </div>
                    </div>
                  </div>
              </div>
              <!-- CARD END -->
              <!-- CARD -->
              <div class="open-source-card">
                  <div class="card-content cc2">

                    <!-- front card -->
                    <div class="card-front">
                        <!-- <h3 class="card-title">The Card</h3>
                        <p>card front</p> -->
                    </div>

                    <!-- back card -->
                    <div class="card-back">
                        <div class="top-card">
                            <h3 class="card-hl">Loopback</h3>
                        </div>
                        
                        <div class="middle-card">
                            <div class="reach">
                                <p class="reach-hl">Reach</p>
                                <h5 class="reach-txt">13000 Git Stars</h5>
                            </div>

                            <div class="participation">
                                <p class="participation-hl">Participation</p>
                                <h5 class="participation-txt">
                                    External Colaborator
                                </h5>
                            </div>
                        </div>

                        <div class="bottom-card">
                            <p class="bottom-card-txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam non dolorum quo voluptatibus maxime alias nesciunt debitis consequatur magnam soluta nulla odit natus hic.
                            </p>
                            <i class="fab fa-github"></i>
                        </div>
                    </div>
                  </div>
              </div>
              <!-- CARD END -->
              <!-- CARD -->
              <div class="open-source-card">
                  <div class="card-content cc3">

                    <!-- front card -->
                    <div class="card-front">
                        <!-- <h3 class="card-title">The Card</h3>
                        <p>card front</p> -->
                    </div>

                    <!-- back card -->
                    <div class="card-back">
                        <div class="top-card">
                            <h3 class="card-hl">Loopback</h3>
                        </div>
                        
                        <div class="middle-card">
                            <div class="reach">
                                <p class="reach-hl">Reach</p>
                                <h5 class="reach-txt">13000 Git Stars</h5>
                            </div>

                            <div class="participation">
                                <p class="participation-hl">Participation</p>
                                <h5 class="participation-txt">
                                    External Colaborator
                                </h5>
                            </div>
                        </div>

                        <div class="bottom-card">
                            <p class="bottom-card-txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam non dolorum quo voluptatibus maxime alias nesciunt debitis consequatur magnam soluta nulla odit natus hic.
                            </p>
                            <i class="fab fa-github"></i>
                        </div>
                    </div>
                  </div>
              </div>
              <!-- CARD END -->
              <!-- CARD -->
              <div class="open-source-card">
                  <div class="card-content cc4">

                    <!-- front card -->
                    <div class="card-front">
                        <!-- <h3 class="card-title">The Card</h3>
                        <p>card front</p> -->
                    </div>

                    <!-- back card -->
                    <div class="card-back">
                        <div class="top-card">
                            <h3 class="card-hl">Loopback</h3>
                        </div>
                        
                        <div class="middle-card">
                            <div class="reach">
                                <p class="reach-hl">Reach</p>
                                <h5 class="reach-txt">13000 Git Stars</h5>
                            </div>

                            <div class="participation">
                                <p class="participation-hl">Participation</p>
                                <h5 class="participation-txt">
                                    External Colaborator
                                </h5>
                            </div>
                        </div>

                        <div class="bottom-card">
                            <p class="bottom-card-txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam non dolorum quo voluptatibus maxime alias nesciunt debitis consequatur magnam soluta nulla odit natus hic.
                            </p>
                            <i class="fab fa-github"></i>
                        </div>
                    </div>
                  </div>
              </div>
              <!-- CARD END -->

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .open-source{
        width: 100%;
        /* background-color: pink; */
        padding: 120px 20px 120px 20px;
    }

    .open-source-content{
        max-width: 60%;
        margin: 0 auto;
    }

    .open-source-text{
        text-align: center;
    }

    .open-source-hl{
        font-size: 4rem;
        text-transform: capitalize;
        line-height: 1.4;
    }

    .open-source-txt{
        font-size: 1.6rem;
        font-weight: lighter;
    }


    /* card css /////////////////////////////////////////////////////////////*/

    .open-source-cards{
        /* border: 2px solid red; */
        margin-top: 120px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 60px;
        justify-content: center;
        align-items: center;
    }


    .open-source-card{
        /* border: 1px solid yellow; */
        /* max-width: 400px; */
        /* height: 400px; */
        perspective: 800px;
    }


    .card-content{
        height: 600px;
        position: relative;
        padding: 5em;
        transition: transform .3s;
        /* background-image: url('../assets/daniel-smile-square.jpg'); */
        background-position: center;
        background-size: cover;

        transform-style: preserve-3d;
        border-radius: 12px;
    }

    .cc1{
        background-image: url('../assets/box1.jpg');
    }

    .cc2{
        background-image: url('../assets/box2.jpg');
    }


    .cc3{
        background-image: url('../assets/box3.jpg');
    }
    
    .cc4{
        background-image: url('../assets/box4.jpg');
    }


    
    .open-source-card:hover .card-content{
        transform: rotateY(180deg);

    }

    .card-front,
    .card-back{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: auto;
        padding: 2em;
        backface-visibility: hidden;
        
    }

    .card-back{
        transform: rotateY(180deg);
        background: rgb(72, 36, 230);
        display: grid;
        color: white;
        border-radius: 12px;
        box-shadow: 0px 0px 20px rgba(71, 85, 209, 0.534);
    }

/* card back content css////////////////////////////////////////////////// */
    .card-hl{
        font-size: 2rem;
    }

    .middle-card{
        display: flex;
        padding: 20px 0 0 0;
        justify-content: space-between;
        border-top: 1px solid blue;
        border-bottom: 1px solid blue;
    }

    h5{
        font-size: 1rem;
        line-height: 1.5;
    }

    .bottom-card{
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bottom-card-txt{
        font-size: .9rem;
    }

    @media(max-width: 1475px){
        .open-source-cards{
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }

    @media(max-width: 1150px){
        .open-source-content{
            max-width: 80%;
        }
        .open-source-cards{
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }

    /* @media(max-width: 880px){
        .open-source-content{
            max-width: 80%;
        }

        .open-source-cards{
            grid-template-columns: 1fr;
            grid-row-gap: 120px;
        }
    } */

    @media(max-width: 400px){
        .open-source-content{
            max-width: 100%;
        }
    }
</style>